import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [singlePokemon, setSinglePokemon] = useState({});

  const fetchData = async () => {
    console.log(id);
    try {
      await axios
        .get(`https://poke-wars.herokuapp.com/pokemon/${id}`)
        .then((res) => {
          setSinglePokemon(res.data);
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
    <div>
      <h2>Pokemon Details</h2>
      <h3>{singlePokemon.name.english}</h3>
      <div>
        <Link to={`/pokemon/${singlePokemon.id}/name`}>Name</Link>
      </div>
      <div>
        <Link to={`/pokemon/${singlePokemon.id}/type`}>Type</Link>
      </div>
      <div></div>
      <Link to={`/pokemon/${singlePokemon.id}/base`}>Base</Link>
    </div>
  );
};

export default Pokemon;
