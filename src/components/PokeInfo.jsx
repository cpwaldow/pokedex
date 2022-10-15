import React from 'react';
import '../styles/pokeInfo.css';

const PokeInfo = ({ pokemon }) => {
  const [info, setInfo] = React.useState(null);
  const fetchImg = async (searchImg) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchImg}`,
    );
    const data = await response.json();
    setInfo(data);
  };
  React.useEffect(() => {
    fetchImg(pokemon);
  }, []);
  return (
    <>
      {info && (
        <section className="poke-info">
          <img
            src={info.sprites.front_default}
            alt={info.name}
            className="poke-img"
          />
          <h3 className="poke-name">
            {info.name}, {info.id}
          </h3>
          <section className="info-container">
            {info.types.map((type) => (
              <p key={type.type.name} className="poke-type">
                {type.type.name}
              </p>
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default PokeInfo;
