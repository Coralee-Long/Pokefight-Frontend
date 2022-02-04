import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokeVsPoke from "./pages/PokeVsPoke";
import BattleField from "./pages/BattleField";
import { useState } from "react";

const AppRouter = () => {
  const [type, setType] = useState("Normal");
  const [pokemon, setPokemon] = useState([]);
  const [singlePokeId, setSinglePokeId] = useState(0);
  const [singlePoke, setSinglePoke] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              type={type}
              setType={setType}
              pokemon={pokemon}
              setPokemon={setPokemon}
              singlePoke={singlePoke}
              setSinglePoke={setSinglePoke}
              singlePokeId={singlePokeId}
              setSinglePokeId={setSinglePokeId}
            />
          }
        ></Route>
        <Route path="/choose" element={<PokeVsPoke />}></Route>
        <Route path="/battle" element={<BattleField />}></Route>

        {/*these are routes to get data from API */}
      </Routes>
    </>
  );
};

export default AppRouter;
