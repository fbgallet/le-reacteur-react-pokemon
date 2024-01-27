import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const PokemonsPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        console.log("response :>> ", data.results);
        setPokemonList(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="container">
      {isLoading ? (
        <div>Is Loading...</div>
      ) : (
        <div className="pokemons-list">
          {pokemonList.map((pokemon) => {
            // console.log(pokemon);
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default PokemonsPage;
