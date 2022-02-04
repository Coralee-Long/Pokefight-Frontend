import "../styles/battle.css";
import ComputerPoke from "../components/battle/ComputerPoke";
import UserPoke from "../components/battle/UserPoke";
import { useState } from "react";

const BattleField = ({
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
  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Something is wrong....</h1>;
  return (
    <div className="BattleBackground">
      <div className="BattleMainContainer">
        <UserPoke singlePoke={singlePoke} />
        <ComputerPoke pokemon={pokemon} />
      </div>

      {/* <img
        src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/city.jpg"
        alt="City"
      />
      <img
        src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg"
        alt="Forest"
      />

      <img
        src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/coast.jpg"
        alt="Beach"
      />
      <img
        src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/canyon.jpg"
        alt="Canyon"
      /> */}
    </div>
  );
};

export default BattleField;
