import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(1, "Name must be at least 1 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" className="form-info" />
      {errors.name && <span class="form-error">{errors.name.message}</span>}

      <input
        {...register("email")}
        placeholder="Email"
        className="form-email"
      />
      {errors.email && <span class="form-info">{errors.email.message}</span>}

      <textarea
        {...register("message")}
        placeholder="Message"
        className="form-message"
      />
      {errors.message && (
        <span class="form-error">{errors.message.message}</span>
      )}

      <button>Send</button>
    </form>
  );
}
