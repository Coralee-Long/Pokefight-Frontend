import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PokemonInfo = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { info } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [infoType, setInfoType] = useState("");
  const fetchData = async () => {
    try {
      await axios
        .get(`https://poke-wars.herokuapp.com/pokemon/${id}/${info}`)
        .then((res) => {
          setPokemonInfo(res.data);
          setLoading(false);
          setInfoType(`${info}`);
          console.log(res.data);
        });
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const capitalizeInfo = () =>
    `${infoType.charAt(0).toUpperCase()}${infoType.slice(1)}`;

  if (loading) return <h1>LOADING........</h1>;
  if (error) return <h1>Something went wrong........</h1>;
  return (
    <div>
      <h2>Pokemon {capitalizeInfo()}:</h2>
      <ul>
        {infoType === "name" ? (
          <>
            <li>English: {pokemonInfo.english}</li>
            <li>Japanese: {pokemonInfo.japanese}</li>
            <li>French: {pokemonInfo.french}</li>
            <li>Japanese: {pokemonInfo.japanese}</li>
          </>
        ) : infoType === "type" ? (
          <div>
            {pokemonInfo.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </div>
        ) : infoType === "base" ? (
          <>
            <li>Attack: {pokemonInfo.Attack}</li>
            <li>Defense: {pokemonInfo.Defense}</li>
            <li>HP: {pokemonInfo.HP}</li>
            <li>Speed: {pokemonInfo.Speed}</li>
            <li>Special Attack: {pokemonInfo["Sp.Attack"]}</li>
            <li>Special Defense: {pokemonInfo["Sp.Defense"]}</li>
          </>
        ) : (
          <p>Something went wrong...</p>
        )}
      </ul>
    </div>
  );
};

export default PokemonInfo;
