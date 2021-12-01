import Heading from "../../layout/Heading";
import MessagesList from "./MessagesList";

export default function Messages() {
  return (
    <>
      <Heading content="Messages" size="2" />
      <MessagesList />
    </>
  );
}
