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

export default function BasicModel({
  handleClose,
  singlePoke,
  setSinglePoke,
  showConfirmModel,
  setShowConfirmModel,
  handleOpenConfirm,
  setBasicModelState,
  basicModelState,
}) {
  // const [poke, setPoke] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  //console.log(singlePoke);

  // if (loading) return <h1>Loading......</h1>;
  // if (error) return <h1>Something is wrong....</h1>;
  return (
    <div>
      <Modal
        open={basicModelState} // basicModelState is Boolean state for only Basic Model
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <h1>{singlePoke.name.english}</h1>
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${singlePoke.id}.png`}
                  alt={singlePoke.name}
                  width="150px"
                  height="150px"
                />
              </div>
              {singlePoke.type.map((poketype, index) => (
                <div key={index}>
                  <p>{poketype}</p>
                </div>
              ))}
              <ul key={singlePoke.id}>
                <li>Attack: {singlePoke.base.Attack}</li>
                <li>Defense: {singlePoke.base.Defense}</li>
                <li>HP: {singlePoke.base.HP}</li>
                <li>Speed: {singlePoke.base.Speed}</li>
                <li>Special Attack: {singlePoke.base["Sp. Attack"]}</li>
                <li>Special Defense: {singlePoke.base["Sp. Defense"]}</li>
              </ul>
            </div>
            <Button
              variant="outlined"
              color="error"
              onClick={handleOpenConfirm}
            >
              Choose
            </Button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
      {/* <Button onClick={handleOpen}>Poke Info</Button> */}
    </div>
  );
}
