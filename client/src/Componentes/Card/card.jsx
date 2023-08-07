import "./card.css";
import { Link } from "react-router-dom";

function Card({ id, image, name, continent }) {
  return (
    <Link to={`/countries/${id}`}>
      <div className="card-conteiner">
        <img className="img" src={image} alt="Img not found" />
        <h3>{name}</h3>
        <p>{continent}</p>
      </div>
    </Link>
  );
}

export default Card;
