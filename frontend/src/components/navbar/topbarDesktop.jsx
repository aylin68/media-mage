import { React, useContext, useState, useEffect, useRef } from "react";
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
import { LinkContainer  } from "react-router-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/logo.svg";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SearchContext} from "../../context/SearchContext";
import {
  faEnvelope,
  faUser,
  faPaperPlane,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const TopbarDesktop = () => {
  const { user, dispatch } = useContext(AuthContext);
  const {searchResults, setSearchResults} = useContext(SearchContext);
  const searchInput = useRef();
  const navigate = useNavigate(); 
  const logOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.clear();
    console.log("hey");
  };

  async function handleSearch(event) {
    event.preventDefault(event.target);
    console.log(searchResults);
    try { const res = await axios.get("/users/search/" + searchInput.current.value);
    console.log( res );
    setSearchResults(res.data);
    console.log(searchResults);
    navigate("/search", { replace: true });}
   catch(error){
     console.log(error);
     setSearchResults(null);
     navigate("/search", { replace: true });}
   }
    // console.log(searchResults);
    

  return (
    <Navbar variant="dark" expand="lg" className="ml-auto" fixed="top">
      <Container
        fluid
        className="navContainer"
        style={{
          display: "flex",
          flexDirection: "row !important",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{
            display: "flex",
            width: "3rem",
            height: "auto",
            margin: "0, 1.5rem",
          }}
        />

        <Navbar.Brand
          style={{
            display: "flex !important",
            flexDirection: "row !important",
            padding: "0 1rem !important  ",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            mediamage
          </Link>
        </Navbar.Brand>

        <Container className="iconContainer">
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
              ref={searchInput}
            />
            <Button variant="outline-warning" id="searchText" type="submit">
              Search
            </Button>
          </Form>
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faPaperPlane} />
          <Link to="/profile/:user">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <FontAwesomeIcon icon={faBell} />
          <Navbar.Toggle aria-controls="responsivex-navbar-nav" />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <LinkContainer to="/" style={{ textDecoration: "none", color: "white" }}>
            <Nav.Link>
                Home
            </Nav.Link>
              </LinkContainer>
              <LinkContainer
                to="/profile/:user"
                style={{ textDecoration: "none", color: "white" }}
                >
                <Nav.Link>
                Profile
            </Nav.Link>
              </LinkContainer>
            <NavDropdown
              title="API's"
              id="basic-nav-dropdown"
              variant="dark"
              bg="dark"
            >
                <LinkContainer
                  to="/apis/weather"
                  style={{ textDecoration: "none"}}
                  >
                  <NavDropdown.Item>
                  Weather
              </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to="/apis/vimeo"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    backgroundColor: "white",
                  }}
                  >
                  <NavDropdown.Item>
                  Vimeo
              </NavDropdown.Item>
                </LinkContainer>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
              <LinkContainer
                to="/register"
                style={{ textDecoration: "none", color: "white", marginRight: '1rem'}}
                onClick={logOut}
                >
                <Nav.Link>
                Log out
            </Nav.Link>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopbarDesktop;
