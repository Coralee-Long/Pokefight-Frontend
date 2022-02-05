import "../styles/battle.css";
import ComputerPoke from "../components/battle/ComputerPoke";
import UserPoke from "../components/battle/UserPoke";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import LogicMethods from '../components/logic/LogicMethods';
//import ActionButton from '../components/battle/ActionButton';

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
      <div className="DivActionButtons">
        {/* for example passed pokemon[0] as ComputerPoke value
        Have to shift logic of getting random poke to here and the pass that as computer poke
        */}
        <Button className="ButtonAction" variant="contained" value="attack" onClick={() => LogicMethods.getResult(singlePoke, pokemon[0], 'attack')}>ATTACK</Button>
        <Button className="ButtonAction" variant="contained" value="defence" onClick={() => LogicMethods.getResult(singlePoke, pokemon[0], 'defence')}>DEFENCE</Button>
        <Button className="ButtonAction" variant="contained" value="specialattack" onClick={() => LogicMethods.getResult(singlePoke, pokemon[0], 'specialattack')}>SPECIAL ATTACK</Button>
        <Button className="ButtonAction" variant="contained" value="specialdefence" onClick={() => LogicMethods.getResult(singlePoke, pokemon[0], 'specialdefence')}>SPECIAL DEFENCE</Button>
      </div>
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
    </div >
  );
};

export default BattleField;
