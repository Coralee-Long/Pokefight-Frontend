import { Routes, Route } from "react-router-dom";
import AllPokemon from "./components/AllPokemon";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";
import Home from "./pages/Home";
import PokeVsPoke from "./pages/PokeVsPoke";
import BattleField from "./pages/BattleField";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/choose" element={<PokeVsPoke />}></Route>
        <Route path="/battle" element={<BattleField />}></Route>

        {/*these are routes to get data from API */}
        <Route exact path="/pokemon" element={<AllPokemon />}></Route>
        <Route path="/pokemon/:id" element={<Pokemon />}></Route>
        <Route path="/pokemon/:id/:info" element={<PokemonInfo />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
