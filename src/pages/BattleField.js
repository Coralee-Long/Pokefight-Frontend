import RandomPoke from "../components/RandomPoke";

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
  return (
    <>
      <h1>Choose Your Battlefield!</h1>
      <RandomPoke pokemon={pokemon} />
      <img
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
      />
    </>
  );
};

export default BattleField;
