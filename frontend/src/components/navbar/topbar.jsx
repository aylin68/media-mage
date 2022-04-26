import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topbar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Button,
  ThemeProvider
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg'

function Topbar() {
  return (
    <div className="topbar">
      <Navbar variant="dark" expand="lg" className="ml-auto" sticky="top">
          <img src={logo} alt="logo" className="logo" style={{display: 'flex', width: '3rem', height: 'auto', margin: '0, 1.5rem' }}/>
        <Container>
          <Navbar.Brand style={{display: 'flex !important', flexDirection: 'row !important', padding: '0 1rem !important  '}}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>mediamage</Link>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Toggle aria-controls="responsivex-navbar-nav" />
            <Container>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" color="blue">Search</Button>
              </Form>
            </Container>  
            <Container expand="lg">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile/:user" style={{ textDecoration: 'none', color: 'white' }}>Profile</Link>
                </Nav.Link>
                <NavDropdown
                  title="API's"
                  id="basic-nav-dropdown"
                  variant="dark"
                  bg="dark"
                >
                  <NavDropdown.Item>
                    <Link to="/api/weather" style={{ textDecoration: 'none', color: 'white' }}></Link>
                    Weather
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/apis/vimeo" style={{ textDecoration: 'none', color: 'black' }}>Vimeo</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link to="/logout" style={{ textDecoration: 'none', color: 'white' }}>Log out</Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topbar;
