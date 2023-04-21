import React, { useState } from "react";
import "../assets/Styled-StarshipList.css";
import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [showStarshipList, setShowStarshipList] = useState(true);

  const handleStarshipSelect = (starship, key) => {
    setSelectedStarship({ starship, key });
    setShowStarshipList(false);
  };

  const handleStarshipClose = () => {
    setSelectedStarship(null);
    setShowStarshipList(true);
  };

  return showStarshipList ? (
    <>
      <div className="StarshipListBase">
        {props.starships.map((starship, index) => (
          <div
            className="StarshipList"
            key={index}
            onClick={() => handleStarshipSelect(starship, index)}
          >
            <div className="StarshipName">{starship.name}</div>
            <div className="StarshipModel">{starship.model}</div>
          </div>
        ))}
      </div>
      {props.final === true ? (
        <h1 className="Final">THE END OF THE STARSHIPS LIST.</h1>
      ) : null}
    </>
  ) : (
    <StarshipCard
      starship={selectedStarship.starship}
      position={selectedStarship.key}
      closeCard={handleStarshipClose}
    />
  );
};

export default StarshipList;
