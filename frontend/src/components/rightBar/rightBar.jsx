import React from "react";
import "./rightBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormControl,
  Container,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FriendList from "./friendList";

function RightBar() {
  const friendsOnline = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const rows = [];

  for (let i = 0; i < friendsOnline.length; i++) {
    rows.push(<FriendList key={i}/>);
      }
  return (
    <Container className="rightBarContainer"style={{ display: "flex", alignItems: "flex-end" }}>
      <ListGroup>
      
          {rows}
      </ListGroup>
    </Container>
  );
}

export default RightBar;
