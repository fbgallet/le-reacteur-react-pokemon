import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TypeCard = ({ name, url }) => {
  const [type, setType] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        console.log("API individual type response :>> ", data);
        // setPokemonList(data.results);
        setType(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    navigate(`/type/${type.id}`);
  };

  return (
    <div className="type-card" onClick={handleClick}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>{name}</div>{" "}
          {/* <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt="pokemon"
          /> */}
        </>
      )}
    </div>
  );
};

export default TypeCard;
