import React from 'react';
import '../styles/pokedex.css';

const Pokemon = ({ info }) => {
  const { id, image, name, type, averageWeight } = info;
  return (
    <section className="pokemon">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>id: {id}</p>
      <p>type: {type}</p>
      <p>
        weight: {averageWeight.value}
        {averageWeight.measurementUnit}
      </p>
    </section>
  );
};

export default Pokemon;
