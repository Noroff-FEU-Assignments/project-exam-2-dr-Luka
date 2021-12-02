import Heading from "../../layout/Heading";
import { Link } from "react-router-dom";
export default function Dashboard() {
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
    </>
  );
}
