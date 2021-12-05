import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../../constants/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

const schema = yup.object().shape({
  name: yup.string().required("Please enter establishment name"),
  address: yup.string().required("Please enter address"),
  description: yup
    .string()
    .required("Please enter description")
    .min(10, "Description must be at least 10 characters!"),
  type: yup.string().required("Please establishment type"),
  price: yup.string().required("Please enter price"),
});

export default function CreateNewForm() {
  const [files, setFiles] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function createEstablishment(data) {
    setSubmitting(true);

    const formData = new FormData();
    const url = baseURL + "/establishments";
    // formData.append("files", data.image[0]);
    // const imageResponse = await axios.post(baseURL + "/upload", formData);
    // data.image = imageResponse.data[0];
    // data.image.related__contentType = "Establishments";
    // data.image.related.name = data.name;

    const resp = await axios.post(url, data);
    navigate("/MessageSent");
  }

  return (
    <form onSubmit={handleSubmit(createEstablishment)} className="contactForm">
      <fieldset disabled={submitting}>
        <input
          {...register("name")}
          placeholder="Name"
          className="form-info block"
        />
        {errors.name && (
          <span className="form-error block">{errors.name.message}</span>
        )}
        <input
          {...register("address")}
          placeholder="Address"
          className="form-info block"
        />
        {errors.address && (
          <span className="form-error block">{errors.address.message}</span>
        )}
        <input
          {...register("type")}
          placeholder="Type (Hotel, Lodge, Spa...)"
          className="form-info block"
        />
        {errors.type && (
          <span className="form-error block">{errors.type.message}</span>
        )}
        <input
          {...register("price")}
          placeholder="Price"
          className="form-info block"
        />
        {errors.price && (
          <span className="form-error block">{errors.price.message}</span>
        )}
        <textarea
          {...register("description")}
          placeholder="Description"
          className="form-message block"
        />
        {errors.description && (
          <span className="form-error block">{errors.description.message}</span>
        )}
        <button className="BtnConfirm">Send</button>
      </fieldset>
    </form>
  );
}
