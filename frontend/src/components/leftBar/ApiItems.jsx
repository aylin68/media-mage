import React from "react";
import "./leftBar.css";
// import { useState } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, NavLink } from "react-bootstrap";
import Apis from "./ApiList";
import "bootstrap/dist/css/bootstrap.min.css";

function ApiItems() {
  return (
    <>
      {Apis.map((api) => (
        <ListGroup.Item
          variant="primary"
          action
          key={api.name}
          className="apiListItem"
        >
          <LinkContainer to={api.route}>
            <NavLink>{api.name}</NavLink>
          </LinkContainer>
        </ListGroup.Item>
      ))}
    </>
  );
}

export default ApiItems;
