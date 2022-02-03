import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokeVsPoke from "./pages/PokeVsPoke";
import BattleField from "./pages/BattleField";
import { useState } from "react";

const AppRouter = () => {
  const [type, setType] = useState("Normal");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home type={type} setType={setType} />}
        ></Route>
        <Route path="/choose" element={<PokeVsPoke />}></Route>
        <Route path="/battle" element={<BattleField />}></Route>

        {/*these are routes to get data from API */}
      </Routes>
    </>
  );
};

export default AppRouter;
