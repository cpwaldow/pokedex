import './App.css';
import Pokelist from './components/Pokelist';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokelist />
      {/* <Pokedex pokemon={pokemonList} /> */}
    </div>
  );
}

export default App;
