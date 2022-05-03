import { React, useContext, useState, useEffect } from "react";
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
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/images/logo.svg";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const TopbarMobile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const logOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    console.log("hey");
    /*     user = !user; */
  };
  return (
    <Navbar variant="dark" expand="lg" className="ml-auto" fixed="top">
      <Container
        fluid
        className="navContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container
          className="iconContainer"
          style={{ display: "flex", alignItems: "center", padding: "0" }}
        >
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{
              display: "flex",
              width: "3rem",
              height: "auto",
              margin: "0",
              padding: "0"
            }}
          />

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline" id="searchText">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>

          {/* <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faPaperPlane} />
          <Link to="/profile/:user">
            <FontAwesomeIcon icon={faUser} />
          </Link> */}
          <FontAwesomeIcon icon={faBell} />
          <Navbar.Toggle aria-controls="responsivex-navbar-nav" />
        </Container>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/profile/:user"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <NavDropdown
              title="API's"
              id="basic-nav-dropdown"
              variant="dark"
              bg="dark"
            >
              <LinkContainer
                to="/api/weather"
                style={{ textDecoration: "none"}}
              >
                <NavDropdown.Item>Weather</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer
                to="/apis/vimeo"
                style={{
                  textDecoration: "none",
                  color: "black",
                  backgroundColor: "white",
                }}
              >
                <NavDropdown.Item>Vimeo</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer
              to="/register"
              style={{ textDecoration: "none", color: "white", marginRight: '1rem' }}
              onClick={logOut}
            >
              <Nav.Link>Log out</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopbarMobile;
