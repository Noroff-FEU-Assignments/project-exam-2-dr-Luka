import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../constants/api";

export default function DetailsItem() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(function () {
    async function fetchData() {
      try {
        const url = baseURL + "/establishments/" + id;
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          setDetails(json);
          console.log(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={details.images[0].url} alt="Hotel Front" />
      </div>
      <div className="card-info">
        <h5>{details.name}</h5>
        <p className="card-p">{details.description}</p>
        <h5>{details.price},-NOK</h5>
        <h5>{details.address}</h5>
      </div>
    </div>
  );
}
