import Heading from "../../layout/Heading";
import EnquiriesList from "./EnquiriesList";
import { useNavigate } from "react-router-dom";

export default function Enquiries() {
  const navigate = useNavigate();
  function GoBack() {
    navigate("/Dashboard");
  }
  return (
    <>
      <Heading content="Enquiries" size="2" />
      <button onClick={GoBack} className="BtnConfirm">
        Back to Dashboard
      </button>
      <EnquiriesList />
    </>
  );
}
