import { useNavigate } from "react-router";

export default function MessageSent({ content, backTo }) {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/${backTo}");
  }
  return (
    <div className="MessageSent">
      <span>{content}</span>
      <button onClick={GoBack} className="BtnConfirm">
        Go Back
      </button>
    </div>
  );
}
