import Banner from "../layout/Banner";
import Heading from "../layout/Heading";
import EstablishmentList from "./EstablishmentsList";
export default function Home() {
  return (
    <>
      <Banner />
      <Heading content="Our Offers" size="2" />
      <EstablishmentList />
    </>
  );
}
