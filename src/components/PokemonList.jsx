import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function PokemonList() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await res.json();
        const details = await Promise.all(
          data.results.map(async (p) => {
            const r = await fetch(p.url);
            const d = await r.json();
            return {
              name: d.name,
              image: d.sprites.front_default,
            };
          }),
        );
        if (isMounted) {
          setPokemons(details);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="grid">
      {pokemons.map((p) => (
        <Card key={p.name} pokemon={p} />
      ))}
    </section>
  );
}
