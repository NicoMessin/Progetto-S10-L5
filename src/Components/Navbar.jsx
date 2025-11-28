import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap-icons/font/bootstrap-icons.css";

function ResponsiveNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      style={{ backgroundColor: "rgb(10, 80, 108);" }}
      className="d-block mx-2 pb-0"
    >
      {/* contenuto */}

      <Container fluid>
        <Navbar.Brand href="#EpimeteoLogo" className="fs-4 text-white">
          <img
            src="https://www.svgrepo.com/show/502423/weather.svg"
            alt="logo Epimeteo"
            style={{ width: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Brand href="#Epimeteo" className="fs-4 text-white">
          EpiMeteo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Notifiche" className="fs-5 mx-3 text-white">
              Notifiche
            </Nav.Link>
            <Nav.Link
              href="#Località Preferite"
              className="fs-5 mx-3 text-white"
            >
              Località Preferite
            </Nav.Link>
            <NavDropdown
              title={<span style={{ color: "white" }}>Elenco</span>}
              id="collapsible-nav-Elenco"
              className="fs-5 mx-3"
              menuVariant="white"
            ></NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes" className="fs-5 text-white">
              <i className="bi bi-three-dots d-none d-md-block"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
