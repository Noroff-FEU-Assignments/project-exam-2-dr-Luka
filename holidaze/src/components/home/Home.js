import Heading from "../layout/Heading";
import EstablishmentList from "./EstablishmentsList";
export default function Home() {
  return (
    <>
      <Heading content="All Offers" size="2" />
      <EstablishmentList />
    </>
  );
}
