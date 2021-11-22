import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Holidaze</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Login">Login</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
