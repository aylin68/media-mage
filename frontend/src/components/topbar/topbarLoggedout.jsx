import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topbar.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function TopbarLoggedout() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="ml-auto"
      fixed="top"
      style={{ justifyContent: "left !important" }}
    >
      <Container fluid className="navContainer">
        <Link to="/login">
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
        </Link>

        <Navbar.Brand>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            mediamage
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopbarLoggedout;
