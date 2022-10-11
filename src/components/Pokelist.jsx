import React from 'react';
import '../styles/pokelist.css';

const Pokelist = () => {
  const [pokemon, setPokemon] = React.useState([]);
  const [pokeImg, setPokeImg] = React.useState('');
  const fetchItens = async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    );
    const data = await response.json();
    return setPokemon(data.results);
  };
  fetchItens();
  const fetchImgs = async (pokeName) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
    );
    const data = await response.json();
    return setPokeImg([...pokeImg, data.sprites.front_default]);
  };
  // fetchImgs('charmander');
  // console.log(pokeImg);
  return (
    <>
      <section className="container">
        {pokemon.map((element) => {
          //
          return (
            <div key={element.name}>
              <img src={pokeImg} alt={element.name} />
              <p className="pokemon">{element.name}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Pokelist;
