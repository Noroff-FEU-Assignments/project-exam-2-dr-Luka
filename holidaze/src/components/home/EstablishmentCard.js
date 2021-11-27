import { Link } from "react-router-dom";

export default function EstablishmentCard({ id, name, description }) {
  return (
    <Link to={`detail/${id}`}>
      <div className="card">
        <div className="card-image">
          <img
            src="http://localhost:1337/uploads/bernard_hermant_Iwb_J_Jfo_C80_unsplash_4ba52f0822.jpg"
            alt="Hotel Image"
          />
        </div>
        <div className="card-info">
          <h5>{name}</h5>
          <p className="card-p">{description}</p>
        </div>
        <Link to={`detail/${id}`}>
          <button className="viewMoreBtn">View More</button>
        </Link>
      </div>
    </Link>
  );
}
