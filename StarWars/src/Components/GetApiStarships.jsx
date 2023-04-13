import { useState, useEffect } from "react";
import axios from "axios";
import StarshipList from "./StarshipList";

const GetStarship = () => {
  const [starShips, setStarships] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      setStarships(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  return (
    <>
      {starShips.length >0 ? <StarshipList starships={starShips} /> : console.log("Cargando")}
    </>
  );
};
export default GetStarship;
