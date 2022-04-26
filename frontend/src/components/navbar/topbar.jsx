import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './topbar.css'
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <Navbar bg="dark" variant="dark" expand="lg" className="ml-auto">
        <Container>
          <Navbar.Brand>
            <Link to="/">mediamage</Link>
          </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container>

            <Form className="d-flex" >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
                />
              <Button variant="outline-success">Search</Button>
            </Form>
                </Container>
                <Container className="linkContainer">

            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/profile/:user">Profile</Link>
              </Nav.Link>
              <NavDropdown
                title="API's"
                id="basic-nav-dropdown"
                variant="dark"
                bg="dark"
                >
                <NavDropdown.Item>
                  <Link to="/api/weather"></Link>
                  Weather
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/apis/vimeo">Vimeo</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/logout">Log out</Link>
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
