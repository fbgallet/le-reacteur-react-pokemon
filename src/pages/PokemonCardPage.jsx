import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonCardPage = () => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        console.log("API individual pokemon response :>> ", data);
        setPokemon(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Is loading...</p>
  ) : (
    <main className="container">
      <div className="pokemon-card-big">
        <div>{pokemon.name}</div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="pokemon"
        />
      </div>
      <div>
        {pokemon.types.map((type) => (
          <p key={type.slot}>{type.type.name}</p>
        ))}
      </div>
    </main>
  );
};

export default PokemonCardPage;
