import "../assets/Styled-StarshipCard.css";
import placeholderImage from "../assets/Images/starships/404.png";

const StarshipCard = (props) => {
  console.log(props);

  const starshipNumber = props.starship.url.split("/").slice(-2, -1)[0];

  const handleImageError = (event) => {
    event.target.src = placeholderImage;
  };

  return (
    <div className="StarshipCardBase">
      <a href="#" className="close" onClick={props.closeCard}></a>{" "}
      <div className="name">
        <h1>{props.starship.name}</h1>
      </div>
      <div className="imageDiv">
            <img
              className="image"
              src={`../src/assets/Images/starships/${starshipNumber}.jpg`}
              onError={handleImageError}
            ></img>
      </div>
      <div className="center">
        <h3>Model: {props.starship.model}</h3>
        <h3>Starship class: {props.starship.starship_class}</h3>
        <h3>Manufacturer: {props.starship.manufacturer}</h3>
        <h3>Cost: {props.starship.cost_in_credits}</h3>
      </div>
      <div className="left-right">
        <div className="left">
          <h5>Crew: {props.starship.crew}</h5>
          <h5> Passenger capacity: {props.starship.passengers}</h5>
          <h5>Cargo capacity: {props.starship.cargo_capacity}</h5>
          <h5>Consumables: {props.starship.consumables}</h5>
        </div>
        <div className="right">
          <h5>Length: {props.starship.length}</h5>
          <h5>
            Maximum atmosphering speed: {props.starship.max_atmosphering_speed}
          </h5>
          <h5>Hyperdrive rating: {props.starship.hyperdrive_rating}</h5>
          <h5>Maximum speed in realspace: {props.starship.MGLT}</h5>
        </div>
      </div>
      <div className="pilots">
        <h5>Pilots: </h5>
        {props.starship.pilots.map((pilotUrl) => {
          const pilotNumber = pilotUrl.split("/").slice(-2, -1)[0];
          return (
            <img
              className="pilots-photo"
              src={`../src/assets/Images/pilots/${pilotNumber}.jpg`}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default StarshipCard;
