import { useState, useEffect } from "react-router-dom";
import UserHealthBar from "./UserHealthBar";
const ComputerPoke = ({
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
  // get the random id
  const randomId = Math.floor(Math.random() * 809) + 1;
  console.log(randomId);
  const randomPoke = pokemon.find((poke) => poke.id === randomId);
  console.log(pokemon);
  console.log(randomPoke);
  //return randomPoke;

  return (
    <div className="ComputerMainContainer">
      <div className="healthBarUserContainer">
        <UserHealthBar singlePoke={randomPoke} />
      </div>
      <h1 className="BattleMainHeading">{randomPoke.name.english}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${randomPoke.id}.png`}
        alt={randomPoke.name.english}
        width="600px"
        height="auto"
        value={randomPoke.id}
        name={randomPoke.name.english}
      />
    </div>
  );
};

export default ComputerPoke;
