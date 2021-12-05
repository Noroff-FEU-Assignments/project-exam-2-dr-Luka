import { useNavigate } from "react-router";

export default function EstablishmentCreated() {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/Dashboard");
  }
  return (
    <div className="MessageSent">
      <span className="sent">Created!</span>
      <button onClick={GoBack} className="BtnConfirm">
        Back Dashboard
      </button>
    </div>
  );
}
