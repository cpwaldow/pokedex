import React from 'react';
import '../styles/btnTypes.css';
import Pokemon from './Pokemon';

const ButtonTypes = ({ pokemonList, type }) => {
  const handleBtn = (event) => {
    return type(
      pokemonList.filter((element) => element.type === event.target.innerText),
    );
  };
  return (
    <section>
      <button className="btnTypes" onClick={handleBtn}>
        Electric
      </button>
      <button className="btnTypes" onClick={handleBtn}>
        Fire
      </button>
      <button className="btnTypes" onClick={handleBtn}>
        Bug
      </button>
      <button className="btnTypes" onClick={handleBtn}>
        Poison
      </button>
      <button className="btnTypes" onClick={handleBtn}>
        Psychic
      </button>
      <button className="btnTypes" onClick={handleBtn}>
        Normal
      </button>
      <button className="btnTypes" onClick={handleBtn}>
        Dragon
      </button>
    </section>
  );
};

export default ButtonTypes;
