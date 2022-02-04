const RandomPoke = {
  GetRandomPokemonId: () => {
    const randomId = Math.floor(Math.random() * 809) + 1;
    return randomId;
  },
  GetRandomPoke: () => {},
};

export default RandomPoke;
