import "../assets/Styled-StarshipCard.css";

const StarshipCard = (props) => {
  console.log(props);
  return (
    <div className="Card">
      <a href="#" className="close" onClick={props.closeCard}>
      </a>{" "}
      <div className="name">
        <h1>{props.starship.name}</h1>
      </div>
      <div className="image">
        <h1>IMAGEN</h1>
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
          <h5>Maximum atmosphering speed: {props.starship.max_atmosphering_speed}</h5>
          <h5>Hyperdrive rating: {props.starship.hyperdrive_rating}</h5>
          <h5>Maximum speed in realspace: {props.starship.MGLT}</h5>
        </div>
      </div>
      <div className="pilots">
        <h5>Pilots:</h5>
        <div className="pilots-photo"></div>
      </div>
    </div>
  );
};

export default StarshipCard;
