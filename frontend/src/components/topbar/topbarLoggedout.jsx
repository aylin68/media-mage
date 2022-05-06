import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topbar.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const TopbarLoggedout = () => {
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

        <Navbar.Brand
          style={{
            display: "flex !important",
            flexDirection: "row !important",
            padding: "0 1rem !important  ",
          }}
        >
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            mediamage
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopbarLoggedout;
