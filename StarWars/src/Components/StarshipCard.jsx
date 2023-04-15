import "../assets/Styled-StarshipCard.css";

const StarshipCard = (props) => {
  return (
    <div className="Card">
      <a href="#" className="close" onClick={props.closeCard}></a>
      <div className="name">
      <h1>NAME</h1>
      </div>
      <div className="image">
      <h1>IMAGEN</h1>
      </div>
      <div className="center">
        <h3>M</h3>
        <h3>Class</h3>
        <h3>Manu</h3>
        <h3>Cost</h3>
      </div>
      <div className="left">
        <h5>Crew</h5>
        <h5>Pass</h5>
        <h5>Cargo</h5>
        <h5>Consum</h5>
      </div>
      <div className="right">
        <h5>Len</h5>
        <h5>Max</h5>
        <h5>Hyper</h5>
        <h5>Max</h5>
      </div>
      <div className="pilots">
        <h5>Pilots:</h5>
        <div className="pilots-photo"></div>
      </div>
    </div>
  );
};

export default StarshipCard;
