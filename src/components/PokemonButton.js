import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const PokemonButton = ({ type, setType }) => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //   const [type, setType] = useState("Normal");

  //creating of an array of pokemon types
  const pokemonTypes = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(type);
  };

  const handleClick = (e) => {
    setType(e.target.value);
    //console.log(type);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="button-container">
          {pokemonTypes.map((p) => (
            <Button
              primary
              type="submit"
              name={p}
              value={p}
              onClick={handleClick}
              variant="contained"
              style={{ margin: "70px !important" }}
            >
              {p}
            </Button>
          ))}
        </div>
      </form>
    </>
  );
};

export default PokemonButton;
