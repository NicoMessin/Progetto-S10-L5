import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
function ResponsiveNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary d-block mx-2">
  <Container fluid>
    <Navbar.Brand href="#Epimeteo" className="fs-4">EpiMeteo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Notifiche" className="fs-5">Notifiche</Nav.Link>
        <Nav.Link href="#Località Preferite" className="fs-5">Località Preferite</Nav.Link>
        <NavDropdown title="Elenco" id="collapsible-nav-Elenco" className="fs-5">
         
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link eventKey={2} href="#memes" className="fs-5">
          <i className="bi bi-three-dots d-none d-md-block"></i>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default ResponsiveNavbar;