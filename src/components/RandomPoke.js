import { useState, useEffect } from "react-router-dom";

const RandomPoke = ({
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

  return <div>{randomPoke.name.english}</div>;
};

export default RandomPoke;
