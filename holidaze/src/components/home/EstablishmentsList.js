import { useState, useEffect } from "react";
import { API } from "../../constants/api";

import EstablishmentCard from "./EstablishmentCard.js";

export default function EstablishmentList() {
  const [Establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="Establishments">
      {Establishments.map(function (Establishment) {
        const { id, name, description } = Establishment;
        return (
          <EstablishmentCard
            key={name}
            id={id}
            name={name}
            description={description}
          />
        );
      })}
    </div>
  );
}
