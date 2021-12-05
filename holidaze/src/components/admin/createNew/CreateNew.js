import Heading from "../../layout/Heading";
import { useNavigate } from "react-router-dom";
import CreateNewForm from "./CreateNewForm";

export default function CreateNew() {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/Dashboard");
  }
  return (
    <>
      <Heading content="Create New Establishment" size="2" />
      <button onClick={GoBack} className="BtnConfirm">
        Back to Dashboard
      </button>
      <CreateNewForm />
    </>
  );
}
