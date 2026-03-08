import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ pokemon }) {
  return (
    <article className="card">
      <Link to={`/pokemon/${pokemon.name}`} className="card-link">
        <img
          src={pokemon.image}
          alt={`${pokemon.name} sprite`}
          className="card-image"
        />
        <h3 className="card-title">{pokemon.name}</h3>
      </Link>
    </article>
  );
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
