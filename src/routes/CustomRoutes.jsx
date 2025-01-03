import React from "react";
import PokemonDetails from "../component/PokemonDetails";
import { Routes, Route } from "react-router-dom";
import Pokedex from "../component/Pokedex";
import DebounceExplain from "../DebounceExplain";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="/debounceExplain" element={<DebounceExplain />} />
    </Routes>
  );
};

export default CustomRoutes;
