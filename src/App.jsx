import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to PokéBrowse</h2>
      <p>Browse a small list of Pokémon fetched from the PokéAPI.</p>
      <Link to="/pokemon" className="primary-link">
        View Pokémon
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
