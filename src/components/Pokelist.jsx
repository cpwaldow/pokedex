import React from 'react';
import '../styles/pokelist.css';
import PokeInfo from './PokeInfo';

const Pokelist = () => {
  const [pokemon, setPokemon] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const fetchItens = async () => {
    setLoading(true);
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    );
    const data = await response.json();
    setPokemon(data.results);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchItens();
  }, []);
  return (
    <>
      {loading && (
        <section>
          <img
            src="https://media.giphy.com/media/yhfTY8JL1wIAE/giphy.gif"
            alt="loading"
          />
          <p className="loading-card">Loading...</p>
        </section>
      )}
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
