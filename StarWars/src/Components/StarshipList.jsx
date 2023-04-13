import React from "react";
import "../assets/Styled-StarshipList.css";

const StarshipList = (props) => {
  console.log(props);
  return props !== 0 ? (
    <div className="StarshipListBase">
      {props.starships.map((starship, index) => (
        <div className="StarshipList" key={index}>
          <div className="StarshipName">{starship.name}</div>
          <div className="StarshipModel">{starship.model}</div>
        </div>
      ))}
    </div>
  ) : (
    console.log("No")
  );
};

export default StarshipList;
