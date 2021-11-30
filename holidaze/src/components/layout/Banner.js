import { useState, useEffect } from "react";
import { baseURL } from "../../constants/api";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";

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

  const HandleOnSelect = (item) => {
    const route = `/details/${item.id}`;
    const navigate = useNavigate();
    setTimeout(() => {
      navigate(route);
    }, 100);
  };
  return (
    <div className="banner">
      <p className="banner-p">Where would you like to stay?</p>
      <div className="banner-search">
        <ReactSearchAutocomplete
          items={Establishments}
          onSelect={HandleOnSelect}
          placeholder="Find your next home..."
        />
      </div>
    </div>
  );
}
