import React from "react";
import { Route, Routes } from "react-router-dom";

import TempDrawer from "./components/TempDrawer";
import CounterOld from "./pages/CounterOld";
import CounterUseReducer from "./pages/CounterUseReducer";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
const App = () => {
  return (
    <>
      <TempDrawer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<CounterOld />} />
        <Route path="/counterReducer" element={<CounterUseReducer />} />
        <Route path="/PlayList" element={<Playlist />} />
      </Routes>
    </>
  );
};

export default App;