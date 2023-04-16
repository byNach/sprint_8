import { useState, useEffect } from "react";
import axios from "axios";
import StarshipList from "./StarshipList";
import "../assets/Styled-StarshipList.css";

const GetStarship = () => {
  const [starShips, setStarships] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      setStarships(res.data.results);
    });
  }, []);

  return (
    <>
      {starShips.length > 0 ? (
          <StarshipList starships={starShips} />
      ) : (
        <div className="Cargando">Cargando...</div>
      )}
    </>
  );
};
export default GetStarship;
