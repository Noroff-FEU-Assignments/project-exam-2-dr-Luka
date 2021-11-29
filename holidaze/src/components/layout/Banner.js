import { Typeahead, Menu, MenuItem } from "react-bootstrap-typeahead";
import { useState, useEffect } from "react";
import { baseURL } from "../../constants/api";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default function Banner() {
  const [singleSelections, setSingleSelections] = useState([]);
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

  return (
    <div className="banner">
      <p className="banner-p">Where would you like to stay?</p>
      <div className="banner-search">
        <Typeahead
          options={Establishments}
          renderMenu={(results, menuProps) => (
            <Menu {...menuProps}>
              {results.map((result, index) => (
                <MenuItem
                  onClick={() => console.log("click!")}
                  option={result}
                  position={index}
                >
                  {result.label}
                </MenuItem>
              ))}
            </Menu>
          )}
        />
      </div>
    </div>
  );
}
