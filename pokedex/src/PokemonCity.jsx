import React, { useState } from "react";



function PokemonCity() {
  // eslint-disable-next-line
  const [city, setCity] = useState("");
  function updateCity(event) {
    // console.log(event.target.value);
    setCity(event.target.value);
  }
  return (
    <div>
      <input type="text" value={city} onChange={updateCity}/>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}


export default PokemonCity;
