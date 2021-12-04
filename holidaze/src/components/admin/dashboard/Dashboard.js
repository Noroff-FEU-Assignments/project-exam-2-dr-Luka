import Heading from "../../layout/Heading";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

export default function Dashboard() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();
  function logout() {
    setAuth(null);
    navigate("/");
  }
  return (
    <>
      <Heading content="Dashboard" size="2" />
      <Link to={`/Messages`}>
        <button className="dashButton block">Messages</button>
      </Link>
      <Link to={`/Enquiries`}>
        <button className="dashButton block">Enquiries</button>
      </Link>
      <Link to={`/CreateNew`}>
        <button className="dashButton block">Create Establishment</button>
      </Link>
      <Link to={`/`}>
        <button onClick={logout} className="dashButton block">
          Logout
        </button>
      </Link>
    </>
  );
}
