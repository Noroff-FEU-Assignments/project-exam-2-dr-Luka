import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../.././images/logo.png";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export default function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="md">
      <Container className="navigation">
        <img src={logo} className="navLogo" alt="Holidaze Logo" />
        <Navbar.Brand href="/">Holidaze</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            {auth ? (
              <Nav.Link eventKey={2} href="/Dashboard">
                Dashboard
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={2} href="/Login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
