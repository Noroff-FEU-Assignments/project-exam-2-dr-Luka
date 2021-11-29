import { useState, useEffect } from "react";
import { baseURL } from "../../constants/api";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function Banner() {
  const [Establishments, setEstablishments] = useState([]);
  useEffect(function () {
    async function fetchData() {
      try {
        const url = baseURL + "/establishments";
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();

          setEstablishments(json);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleOnSelect = (item) => {
    console.log(item);
  };
  return (
    <div className="banner">
      <p className="banner-p">Where would you like to stay?</p>
      <div className="banner-search">
        <ReactSearchAutocomplete
          items={Establishments}
          onSelect={handleOnSelect}
          placeholder="Find your next home..."
        />
      </div>
    </div>
  );
}
