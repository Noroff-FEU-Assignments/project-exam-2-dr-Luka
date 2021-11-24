import Heading from "../layout/Heading";
import EstablishmentList from "./EstablishmentsList";
export default function Home() {
  return (
    <>
      <Heading content="Home" size="1" />
      <EstablishmentList />
    </>
  );
}
