import { Link } from "react-router-dom";

export default function EstablishmentCard({ id, name, description }) {
  return (
    <Link to={`detail/${id}`}>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-info">
          <h5>{name}</h5>
          <p className="card-p">{description}</p>
        </div>
      </div>
    </Link>
  );
}
