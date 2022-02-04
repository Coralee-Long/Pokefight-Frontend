import { useState, useEffect } from "react";
import pokemonData from "../data/pokemonData";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import "../styles/mui_styles.css";
import BasicModal from "../components/BasicModal";

const PokeGallery = ({
  type,
  setType,
  pokemon,
  setPokemon,
  singlePoke,
  setSinglePoke,
  singlePokeId,
  setSinglePokeId,
}) => {
  // const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingSingle, setLoadingSingle] = useState(true);
  // const [singlePokemon, setSinglePokemon] = useState(1);

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setSinglePokeId(e.target.attributes["value"].value);
    // setOpen(true);
  };
  const handleClose = (e) => {
    // console.log(e);
    // console.log(e.target.attributes["value"].value);
    setOpen(false);
    setSinglePokeId(0);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //fetch all Pokemon
  const fetchData = async () => {
    try {
      await axios.get("https://poke-wars.herokuapp.com/pokemon").then((res) => {
        setPokemon(res.data);
        setLoading(false);
        //console.log(res.data);
      });
    } catch (e) {
      setError(true);
    }
  };

  // fetch one Pokemon
  const fetchSinglePokeData = async () => {
    try {
      await axios
        .get(`https://poke-wars.herokuapp.com/pokemon/${singlePokeId}`)
        .then((res) => {
          setSinglePoke(res.data);
          setLoadingSingle(false);
          console.log(res.data);
        });
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (singlePokeId !== 0) {
      //singlePokemon = 1;
      //   //setSinglePokemon(1);
      fetchSinglePokeData();
      setOpen(true);
      //setLoadingSingle(false);
    } else {
      setLoadingSingle(true);
    }
  }, [singlePokeId, loadingSingle]);

  useEffect(() => {
    fetchData();
  }, []);

  //filter pokemon based on it's selection
  const filteredPokes = pokemon.filter((p) => p.type.includes(type));
  console.log(filteredPokes);

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Something is wrong....</h1>;
  return (
    <ImageList
      id="imgList"
      sx={{ width: 200, height: 450 }}
      style={{ gridTemplateColumns: "auto minmax(1fr,1fr, 1fr, 1fr)" }}
    >
      {" "}
      {loadingSingle === false ? (
        <BasicModal
          handleOpen={handleOpen}
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          type={type}
          setType={setType}
          pokemon={pokemon}
          setPokemon={setPokemon}
          singlePoke={singlePoke}
          setSinglePoke={setSinglePoke}
          singlePokeId={singlePokeId}
          setSinglePokeId={setSinglePokeId}
        />
      ) : (
        <div></div>
      )}
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {filteredPokes.map((poke) => (
        <ImageListItem
          key={poke.id}
          onClick={handleOpen}
          style={{ backgroundColor: "lightblue" }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
            alt={poke.name.english}
            width="200px"
            height="200px"
            value={poke.id}
            name={poke.name.english}
          />
          <ImageListItemBar title={poke.name.english} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PokeGallery;

/* {filteredPokes.map((poke) => {
        return (
          <>
            <div>
              <h1>{poke.name.english}</h1>
              {poke.type.map((poketype) => (
                <>
                  <p>{poketype}</p>
                </>
              ))}
              <ul>
                <li>Attack: {poke.base.Attack}</li>
                <li>Defense: {poke.base.Defense}</li>
                <li>HP: {poke.base.HP}</li>
                <li>Speed: {poke.base.Speed}</li>
                <li>Special Attack: {poke.base["Sp. Attack"]}</li>
                <li>Special Defense: {poke.base["Sp. Defense"]}</li>
              </ul>
            </div>
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
                alt={poke.name}
                width="500px"
                height="500px"
              />
            </div>
          </>
        );
      })} */
// return (
//   <>
//     <ImageList sx={{ width: 500, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">December</ListSubheader>
//       </ImageListItem>
//       {filteredPokes.map((item, index) => (
//         <ImageListItem key={item.index}>
//           <img
//             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png?w=248&fit=crop&auto=format`}
//             srcSet={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={poke.name}
//             loading="lazy"
//           />
//           <ImageListItemBar title={poke.name} />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   </>
// )
//}
