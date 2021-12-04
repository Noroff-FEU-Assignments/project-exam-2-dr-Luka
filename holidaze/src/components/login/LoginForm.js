import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseURL, tokenPath } from "../../constants/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const url = baseURL + tokenPath;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    const axios = require("axios").default;
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      navigate("/Dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
      <fieldset disabled={submitting}>
        <input
          {...register("identifier")}
          placeholder="Username"
          className="form-info block"
        />
        {errors.identifier && (
          <span className="form-error block">{errors.identifier.message}</span>
        )}

        <input
          {...register("password")}
          placeholder="Password"
          className="form-info block"
          type="password"
        />
        {errors.password && (
          <span className="form-error block">{errors.password.message}</span>
        )}

        <button className="BtnConfirm">Login</button>
      </fieldset>
    </form>
  );
}
