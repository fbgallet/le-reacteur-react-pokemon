import axios from "axios";
import { useEffect, useState } from "react";
import TypeCard from "../components/TypeCard";

const TypesPage = () => {
  const [typesList, setTypesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/type`);
        console.log("Types :>> ", data.results);
        setTypesList(data.results);
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
        <div className="types-list">
          {typesList.map((type) => {
            // console.log(pokemon);
            return <TypeCard key={type.name} name={type.name} url={type.url} />;
          })}
        </div>
      )}
    </main>
  );
};

export default TypesPage;
