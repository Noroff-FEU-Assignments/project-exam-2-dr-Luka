import { useNavigate } from "react-router";

export default function MessageSent() {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/");
  }
  return (
    <div className="MessageSent">
      <span>Thank you for Booking</span>
      <button onClick={GoBack} className="BtnConfirm">
        Back to Home
      </button>
    </div>
  );
}
