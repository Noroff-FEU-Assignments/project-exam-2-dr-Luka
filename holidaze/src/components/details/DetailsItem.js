import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../constants/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name!")
    .min(1, "Name must be at least 1 characters!"),
});

export default function DetailsItem() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(function () {
    async function fetchData() {
      try {
        const fetchUrl = baseURL + "/establishments/" + id;
        const response = await fetch(fetchUrl);

        if (response.ok) {
          const json = await response.json();
          setDetails(json);
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
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(data) {
    setSubmitting(true);
    const axios = require("axios").default;
    const postUrl = baseURL + "/enquiries";
    console.log(data);
    axios.post(postUrl, data).then(
      (response) => {
        console.log(response);
        setSubmitting(false);
        navigate("/Booked");
      },
      (error) => {
        console.log(error);
      }
    );
  }

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
    <div className="bookEstablishment">
      <div className="establishmentDetails">
        <div className="details-info">
          <h5>{details.name}</h5>
          <p className="details-p">{details.description}</p>
          <h5>Address:{details.address}</h5>
          <h5>{details.price},-NOK</h5>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bookingForm">
        <fieldset disabled={submitting}>
          <input
            value={details.name}
            {...register("establishment")}
            className="form-info block hidden"
          />
          <input
            {...register("name")}
            placeholder="Your Name"
            className="form-info block"
          />
          <div className="datesContainer">
            <div className="date">
              CheckIn Date:
              <input
                type="date"
                {...register("CheckInDate")}
                className="form-info "
              />
            </div>
            <div className="date">
              CheckOut Date:
              <input
                type="date"
                {...register("CheckOutDate")}
                className="form-info"
              />
            </div>
          </div>
          <button className="BtnConfirm">Book</button>
        </fieldset>
      </form>
    </div>
  );
}
