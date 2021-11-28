import React, { Fragment, useState } from "react";
const CaughtPokemon = (props) => {
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  // const pokemonArr = ["Eve", "Pikachu", "Baulbasaur", "Charmander", "Rattata"];
  let [caught, setCaught] = useState([]);
  // const randomPokemon = () => {
  //   return pokemonArr[Math.floor(Math.random() * (pokemonArr.length - 1))];
  // };
  const catchPokemon = () => {
    if(pokemonNameInput.length > 0){
      //caught++ means return before increment ++caught means return after increment
      setCaught(() => caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }else{
      alert("field can't be empty! - Silly.");
    }
  };

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon!</button>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </>
  );
};
export default CaughtPokemon;
