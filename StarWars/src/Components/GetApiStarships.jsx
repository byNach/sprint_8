import { useState, useEffect } from "react";
import axios from "axios";
import StarshipList from "./StarshipList";
import "../assets/Styled-StarshipList.css";

const GetStarship = () => {

 let actualPage = 1;

  const [starShips, setStarships] = useState([]);

  const loadMoreStarships = () => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${actualPage}`)
      .then((res) => {
        const moreStarships = [];
        res.data.results.forEach((data) => moreStarships.push(data));
        setStarships(oldStarships => [...oldStarships, ...moreStarships]);
      });
        actualPage += 1;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      if (actualPage === 5){
        return(console.log("Final"))
      }
      else{
        loadMoreStarships()
      }
    }
  };
  useEffect(() => {
    loadMoreStarships();
    window.addEventListener("scroll", handleScroll);
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
