import React, { useState } from 'react';
import Pokemon from './Pokemon';
import '../styles/pokedex.css';
import ButtonTypes from './ButtonTypes';

const Pokedex = ({ pokemon }) => {
  const [pokemonCounter, setPokemonCounter] = useState(0);
  const [pokeType, setPokeType] = useState([]);
  const handleCounter = () => {
    if (pokemonCounter <= 7) {
      setPokemonCounter(pokemonCounter + 1);
      setPokeType([]);
    } else {
      setPokemonCounter(0);
    }
  };
  return (
    <>
      <section className="container">
        {pokeType.length === 0 ? (
          <Pokemon
            key={pokemon[pokemonCounter].id}
            info={pokemon[pokemonCounter]}
          />
        ) : null}
        {pokeType.length !== 0
          ? pokeType.map((element) => (
              <Pokemon key={element.id} info={element} />
            ))
          : null}
      </section>
      <button className="btn" onClick={handleCounter}>
        Próximo
      </button>
      <ButtonTypes pokemonList={pokemon} type={setPokeType} />
    </>
  );
};

export default Pokedex;
