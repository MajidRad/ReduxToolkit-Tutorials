import React from "react";
import { Route, Routes } from "react-router-dom";

import TempDrawer from "./components/TempDrawer";
import CounterOld from "./pages/CounterOld";
import CounterUseReducer from "./pages/CounterUseReducer";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Car from "./pages/Car";
import Immutable from "./pages/Immutable";
const App = () => {
  return (
    <>
      <TempDrawer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/immutable" element={<Immutable />}></Route>
        <Route path="/counter" element={<CounterOld />} />
        <Route path="/counterReducer" element={<CounterUseReducer />} />
        <Route path="/PlayList" element={<Playlist />} />
        <Route path="/Car" element={<Car />} />
      </Routes>
    </>
  );
};

export default App;
