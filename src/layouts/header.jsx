import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg"  bg={window.location.pathname==="/" ? "transparent": "dark"} variant="transparent">
    <Container>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className=' justify-content-end' id="responsive-navbar-nav">
      <Nav>
        <NavLink exact to="/" className="nav-link" activeClassName="nav-link active">Home</NavLink> 
        <NavLink exact to="/departments" className="nav-link" activeClassName="nav-link active">Departments</NavLink>
        <NavLink exact to="/services" className="nav-link" activeClassName="nav-link active">Services</NavLink>
        <NavLink exact to="/about" className="nav-link" activeClassName="nav-link active">About Us</NavLink>
        <NavLink exact to="/contact" className="nav-link" activeClassName="nav-link active">Contact</NavLink>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;