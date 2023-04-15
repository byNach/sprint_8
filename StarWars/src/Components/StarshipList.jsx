import React, { useState } from "react";
import "../assets/Styled-StarshipList.css";
import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {

  const [showStarshipCard, setStarshipCard] = useState(false);
  const closeCard = () => {setStarshipCard(false)};

  return (
    <div className="StarshipListBase">
      {props.starships.map((starship, index) => (
        <div
          className="StarshipList"
          key={index}
          onClick={() => setStarshipCard(true)}
        >
          <div className="StarshipName">{starship.name}</div>
          <div className="StarshipModel">{starship.model}</div>
        </div>
      ))}
      {showStarshipCard && <StarshipCard closeCard={closeCard}/>}
    </div>
  );
};

export default StarshipList;
