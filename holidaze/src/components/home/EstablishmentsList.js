import { useState, useEffect } from "react";
import { baseURL } from "../../constants/api";

import EstablishmentCard from "./EstablishmentCard.js";

export default function EstablishmentList() {
  const [Establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const url = baseURL + "/establishments";
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();

          setEstablishments(json);
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
    <div className="establishments">
      {Establishments.map(function (Establishment) {
        const { id, name, description, images } = Establishment;
        return (
          <EstablishmentCard
            key={name}
            id={id}
            name={name}
            description={description}
            image={images[0].url}
          />
        );
      })}
    </div>
  );
}
