import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";

export default function MessageSent() {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/");
  }
  return (
    <div className="MessageSent">
      <span>You message has been sent!</span>
      <button onClick={GoBack} className="BtnConfirm">
        Back to Home
      </button>
    </div>
  );
}
