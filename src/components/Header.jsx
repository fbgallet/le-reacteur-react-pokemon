import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <Link to={"/"}>Pokemon</Link>
      <nav>
        <Link to="/pokemons">Pokemons</Link>
        <Link to="/types">Types</Link>
      </nav>
    </header>
  );
};

export default Header;
