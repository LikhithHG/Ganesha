import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="orange">
      <Container>
        <Navbar.Brand href="#home">Shri Ganesh Utsav Samithi Inc</Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="events-container" smooth={true} duration={500}>
            Events
          </Nav.Link>
          <Nav.Link href="#features">Volunteering</Nav.Link>
          <Nav.Link href="#pricing">Donations</Nav.Link>
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#features">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
