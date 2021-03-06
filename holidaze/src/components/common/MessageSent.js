import { useNavigate } from "react-router";

export default function MessageSent() {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/");
  }
  return (
    <div className="MessageSent">
      <span className="sent">Message is Sent!</span>
      <button onClick={GoBack} className="BtnConfirm">
        Back to Home
      </button>
    </div>
  );
}
