import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //fetch data
  const fetchData = async () => {
    try {
      await axios.get("https://poke-wars.herokuapp.com/pokemon").then((res) => {
        setPokemon(res.data);
        setLoading(false);
        console.log(res.data);
      });
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>LOADING........</h1>;
  if (error) return <h1>Something went wrong........</h1>;
  return (
    <>
      <ul>
        {pokemon.map((poke) => (
          <div key={poke.id}>
            <Link to={`/pokemon/${poke.id}`}>
              <li>{poke.name.english}</li>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default AllPokemon;
