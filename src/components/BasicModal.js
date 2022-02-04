import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PokeGallery from "./PokeGallery";

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

export default function BasicModal({
  open,
  setOpen,
  handleClose,
  handleOpen,
  singlePokemon,
  setSinglePokemon,
}) {
  const [poke, setPoke] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //fetch data
  const fetchData = async () => {
    try {
      await axios
        .get(`https://poke-wars.herokuapp.com/pokemon/${singlePokemon}`)
        .then((res) => {
          setPoke(res.data);
          setLoading(false);
          console.log(res.data);
        });
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    // if (singlePokemon === 0) {
    //   singlePokemon = 1;
    //   //setSinglePokemon(1);
    // }
    fetchData();
  }, [singlePokemon]);

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Something is wrong....</h1>;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <h1>{poke.name.english}</h1>
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
                  alt={poke.name}
                  width="150px"
                  height="150px"
                />
              </div>
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
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
      {/* <Button onClick={handleOpen}>Poke Info</Button> */}
    </div>
  );
}
