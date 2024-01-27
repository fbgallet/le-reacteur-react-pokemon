import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import PokemonsPage from "./Pages/PokemonsPage";
import TypesPage from "./Pages/TypesPage";
import PokemonCardPage from "./pages/PokemonCardPage";
import TypeCardPage from "./pages/TypeCardPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemon/:id" element={<PokemonCardPage />} />
        <Route path="/types" element={<TypesPage />} />
        <Route path="/type/:id" element={<TypeCardPage />} />
        {/* <Route path="/product/:id" element={<Product />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
