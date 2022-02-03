import { useState, useEffect } from "react";
import pokemonData from "../data/pokemonData";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import "../styles/mui_styles.css";
import BasicModal from "../components/BasicModal";

const PokeGallery = ({ type, setType }) => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  //fetch data
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

  useEffect(() => {
    fetchData();
  }, []);

  //filter pokemon based on it's selection
  const filteredPokes = pokemon.filter((p) => p.type.includes(type));
  console.log(filteredPokes);

  return (
    <ImageList
      id="imgList"
      sx={{ width: 200, height: 450 }}
      style={{ gridTemplateColumns: "auto minmax(1fr,1fr, 1fr, 1fr)" }}
    >
      <BasicModal
        handelOpen={handleOpen}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {filteredPokes.map((poke) => (
        <ImageListItem key={poke.id} onClick={handleOpen}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
            alt={poke.name}
            width="200px"
            height="200px"
          />
          <ImageListItemBar title={poke.name.english} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

{
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
}

export default PokeGallery;
