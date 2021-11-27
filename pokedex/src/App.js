import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";

const App = () => {
  const logWhenClicked = () => {
    console.log("Hello World");
  };

  return (
    <div>
      <Logo appName="Tom's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
    </div>
  );
};

export default App;
