import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">PokéBrowse</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokémon</Link>
      </nav>
    </header>
  );
}
