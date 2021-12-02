import { useState, useEffect } from "react";
import { baseURL } from "../../../constants/api";
import EnquiriesItem from "./EnquiriesItem";

export default function EnquiriesList() {
  const [Enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const url = baseURL + "/enquiries";
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();

          setEnquiries(json);
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
    <div className="EnquiriesList">
      {Enquiries.map(function (enquiriesItem) {
        const {
          id,
          name,
          establishment,
          CheckInDate,
          CheckOutDate,
          updated_at,
        } = enquiriesItem;
        return (
          <EnquiriesItem
            key={id}
            name={name}
            establishment={establishment}
            checkInDate={CheckInDate}
            checkOutDate={CheckOutDate}
            time={updated_at}
          />
        );
      })}
    </div>
  );
}
