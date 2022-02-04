import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const confirmModelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmModel({
  setConfirmModelState,
  confirmModelState,
  handleOpenConfirm,
  handleCloseConfirm,
  singlePoke,
  setSinglePoke,
}) {
  let navigate = useNavigate();
  console.log(singlePoke);
  return (
    <>
      <Modal
        open={confirmModelState} // If open is true, show Modal ( the confirmModelState is currently true)
        onClose={handleCloseConfirm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={confirmModelStyle}>
          <p>You chose {singlePoke.name.english}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${singlePoke.id}.png`}
            alt={singlePoke.name}
            width="50px"
            height="50px"
          />
          <p>ARE YOU SURE?</p>
          <Button
            variant="outlined"
            onClick={() => setConfirmModelState(false)}
          >
            Choose another Poke
          </Button>
          <Button variant="outlined" onClick={() => navigate("/battle")}>
            Fight with this Poke
          </Button>
        </Box>
      </Modal>
    </>
  );
}
