import "./App.css";
import AppRouter from "./AppRouter";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [type, setType] = useState("Normal");
  const [pokemon, setPokemon] = useState([]);
  const [singlePokeId, setSinglePokeId] = useState(0);
  const [singlePoke, setSinglePoke] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingSingle, setLoadingSingle] = useState(true);

  // FETCHING ALL DATA:
  //fetch all Pokemon
  const fetchData = async () => {
    try {
      await axios.get("https://poke-wars.herokuapp.com/pokemon").then((res) => {
        // console.log(res.data);
        setPokemon(res.data);
        setLoading(false);
      });
    } catch (e) {
      setError(true);
    }
  };

  // fetch one Pokemon
  const fetchSinglePokeData = async () => {
    try {
      await axios
        .get(`https://poke-wars.herokuapp.com/pokemon/${singlePokeId}`)
        //.get(`https://poke-wars.herokuapp.com/pokemon/1`)
        .then((res) => {
          setSinglePoke(res.data);
          setLoadingSingle(false);
          // console.log(res.data);
        });
    } catch (e) {
      setError(true);
    }
  };
  // ----------------------------------------------

  // USE EFFECTS FOR DATA FETCHING
  useEffect(() => {
    if (singlePokeId !== 0) {
      fetchSinglePokeData();
    } else {
      setLoadingSingle(true);
    }
  }, [singlePokeId, loadingSingle]);

  useEffect(() => {
    fetchData();
  }, []);
  // ----------------------------------------------
  // console.log("hellop");
  // console.log(pokemon);
  return (
    <>
      <AppRouter
        type={type}
        setType={setType}
        pokemon={pokemon}
        setPokemon={setPokemon}
        singlePoke={singlePoke}
        setSinglePoke={setSinglePoke}
        singlePokeId={singlePokeId}
        setSinglePokeId={setSinglePokeId}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        loadingSingle={loadingSingle}
        setLoadingSingle={setLoadingSingle}
      />
    </>
  );
};

export default App;
