import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) throw new Error("Pokémon not found");
        const data = await res.json();
        if (isMounted) setPokemon(data);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => (isMounted = false);
  }, [name]);

  if (loading) return <div className="detail-loading">⏳ Loading Pokémon...</div>;
  if (error) return <div className="detail-error">❌ {error}</div>;
  if (!pokemon) return null;

  return (
    <article className="detail">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      
      <div className="detail-header">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>
          <h1>{pokemon.name}</h1>
          <div className="badges">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className={`badge type-${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-section">
        <h3>Stats</h3>
        <div className="stats-grid">
          <div className="stat"><strong>Height:</strong> {(pokemon.height / 10).toFixed(1)}m</div>
          <div className="stat"><strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)}kg</div>
          <div className="stat"><strong>Base XP:</strong> {pokemon.base_experience}</div>
        </div>
      </div>

      <div className="detail-section">
        <h3>Base Stats</h3>
        <div className="stats-list">
          {pokemon.stats.map((s) => (
            <div key={s.stat.name} className="stat-bar">
              <span className="stat-name">{s.stat.name}</span>
              <div className="bar"><div className="fill" style={{width: `${(s.base_stat / 150) * 100}%`}}></div></div>
              <span className="stat-value">{s.base_stat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <h3>Abilities</h3>
        <div className="badges">
          {pokemon.abilities.map((a) => (
            <span key={a.ability.name} className="badge ability">
              {a.ability.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
