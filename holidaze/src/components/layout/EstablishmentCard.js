import { Link } from "react-router-dom";

export default function EstablishmentCard({ id, name, description }) {
  return (
    <Link to={`detail/${id}`}>
      <h5>{name}</h5>
      <p>{description}</p>
    </Link>
  );
}
