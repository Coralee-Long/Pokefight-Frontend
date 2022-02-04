import { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import "../styles/mui_styles.css";
import BasicModel from "./BasicModel";
import ConfirmModel from "./ConfirmModel";

const PokeGallery = ({
  // PROPS FROM PARENT (HOME.JS)
  type,
  setType,
  pokemon,
  setPokemon,
  singlePoke,
  setSinglePoke,
  singlePokeId,
  setSinglePokeId,
  error,
  setError,
  loading,
  setLoading,
  loadingSingle,
  setLoadingSingle,
}) => {
  // ERROR & LOADING STATES DEFINED:

  // MODAL STATES DEFINED:
  const [basicModelState, setBasicModelState] = useState(false);
  const [confirmModelState, setConfirmModelState] = useState(false);

  // ----------------------------------------------

  // CLICK HANDLERS FOR HOME PAGE:
  const handleOpen = (e) => {
    setSinglePokeId(e.target.attributes["value"].value);
    setBasicModelState(true);
    // setOpen(true);
  };
  const handleClose = (e) => {
    //console.log("Inside handle close of basic model");
    setBasicModelState(false);
    //console.log(basicModelState);
    setSinglePokeId(0);
  };
  const handleOpenConfirm = (e) => {
    //console.log("Inside handle open confirm ");
    setBasicModelState(false);
    setConfirmModelState(true);
    // console.log(basicModelState);
    // console.log(confirmModelState);
  };
  const handleCloseConfirm = (e) => {
    setConfirmModelState(false);
    setSinglePokeId(0);
  };

  // ----------------------------------------------

  // FILTERING DATA:
  //filter pokemon based on it's selection
  const filteredPokes = pokemon && pokemon.filter((p) => p.type.includes(type));
  // console.log(pokemon);

  // ----------------------------------------------

  // IF Data is still loading or or error:
  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Something is wrong....</h1>;
  // ELSE return all the data below:
  return (
    <ImageList
      id="imgList"
      sx={{ width: 200, height: 450 }}
      style={{ gridTemplateColumns: "auto minmax(1fr,1fr, 1fr, 1fr)" }}
    >
      {loadingSingle === false ? (
        <>
          <BasicModel
            pokemon={pokemon}
            setPokemon={setPokemon}
            handleClose={handleClose}
            basicModelState={basicModelState}
            setBasicModelState={setBasicModelState}
            singlePoke={singlePoke}
            setSinglePoke={setSinglePoke}
            handleOpenConfirm={handleOpenConfirm}
            error={error}
            setError={setError}
            loading={loading}
            setLoading={setLoading}
            loadingSingle={loadingSingle}
            setLoadingSingle={setLoadingSingle}
          />
          <ConfirmModel
            pokemon={pokemon}
            setPokemon={setPokemon}
            setConfirmModelState={setConfirmModelState}
            confirmModelState={confirmModelState}
            handleOpenConfirm={handleOpenConfirm}
            handleCloseConfirm={handleCloseConfirm}
            singlePoke={singlePoke}
            setSinglePoke={setSinglePoke}
            error={error}
            setError={setError}
            loading={loading}
            setLoading={setLoading}
            loadingSingle={loadingSingle}
            setLoadingSingle={setLoadingSingle}
          />
        </>
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
