const Logo = (props) => {
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        alt="pokemon"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      />
    </header>
  );
};
export default Logo;
