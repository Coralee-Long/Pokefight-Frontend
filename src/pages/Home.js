import { Link } from "react-router-dom";
import PokemonButton from "../components/PokemonButton";
import PokeGallery from "../components/PokeGallery";
import "../styles/home.css";

const Home = ({
  type,
  setType,
  pokemon,
  setPokemon,
  singlePoke,
  setSinglePoke,
  singlePokeId,
  setSinglePokeId,
}) => {
  //console.log(type);

  return (
    <>
      <h1>Welcome to the Pokemon Games</h1>
      <p>Select your Pokemon for the fight</p>
      <PokemonButton
        type={type}
        setType={setType}
        pokemon={pokemon}
        setPokemon={setPokemon}
        singlePoke={singlePoke}
        setSinglePoke={setSinglePoke}
        singlePokeId={singlePokeId}
        setSinglePokeId={setSinglePokeId}
      />
      {/* // Gallery COMPONENT: */}
      <div>
        <PokeGallery
          type={type}
          setType={setType}
          pokemon={pokemon}
          setPokemon={setPokemon}
          singlePoke={singlePoke}
          setSinglePoke={setSinglePoke}
          singlePokeId={singlePokeId}
          setSinglePokeId={setSinglePokeId}
        />
      </div>
      {/* <Link to={`/choose`}>
                <button>My Pokemon is chosen!!</button>
            </Link> */}
    </>
  );
};

export default Home;
