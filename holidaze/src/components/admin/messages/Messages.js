import Heading from "../../layout/Heading";
import MessagesList from "./MessagesList";
import { useNavigate } from "react-router-dom";

export default function Messages() {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/Dashboard");
  }
  return (
    <>
      <Heading content="Messages" size="2" />
      <button onClick={GoBack} className="BtnConfirm">
        Back to Dashboard
      </button>
      <MessagesList />
    </>
  );
}
