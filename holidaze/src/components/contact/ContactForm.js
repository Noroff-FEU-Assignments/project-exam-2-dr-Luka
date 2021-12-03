import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseURL } from "../../constants/api";

const schema = yup.object().shape({
  author: yup
    .string()
    .required("Please enter your name!")
    .min(1, "Name must be at least 1 characters!"),
  email: yup
    .string()
    .required("Please enter an email address!")
    .email("Please enter a valid email address!"),
  message: yup
    .string()
    .required("Please enter your message!")
    .min(10, "The message must be at least 10 characters!"),
});

export default function ContactForm() {
  const url = baseURL + "/messages";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    const axios = require("axios").default;

    axios.post(url, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
      <input
        {...register("author")}
        placeholder="Name"
        className="form-info block"
      />
      {errors.author && (
        <span className="form-error block">{errors.author.message}</span>
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className="form-info block"
      />
      {errors.email && (
        <span className="form-error block">{errors.email.message}</span>
      )}

      <textarea
        {...register("message")}
        placeholder="Message"
        className="form-message block"
      />
      {errors.message && (
        <span className="form-error block">{errors.message.message}</span>
      )}

      <button className="BtnConfirm">Send</button>
    </form>
  );
}
