import React, { Fragment, useState } from "react";
const CaughtPokemon = (props) => {
  const pokemonArr = ["Eve", "Pikachu", "Baulbasaur", "Charmander", "Rattata"];
  let [caught, setCaught] = useState([]);
  const randomPokemon = () => {
    return pokemonArr[Math.floor(Math.random() * (pokemonArr.length - 1))];
  };
  const catchPokemon = () => {
    //caught++ means return before increment ++caught means return after increment
    setCaught(() => caught.concat(randomPokemon()));
  };
  return (
    <>
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
