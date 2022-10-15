import React from 'react';
import '../styles/pokelist.css';
import PokeInfo from './PokeInfo';

const Pokelist = () => {
  const [pokemon, setPokemon] = React.useState([]);
  const fetchItens = async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    );
    const data = await response.json();
    return setPokemon(data.results);
  };

  React.useEffect(() => {
    fetchItens();
  }, []);
  return (
    <>
      <section className="container-list">
        {pokemon.map((element) => {
          return (
            <div key={element.name}>
              <PokeInfo pokemon={element.name} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Pokelist;
