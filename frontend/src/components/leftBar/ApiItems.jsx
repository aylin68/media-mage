import React from "react";
import "./leftBar.css";
// import { useState } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Apis from "./ApiList";
import "bootstrap/dist/css/bootstrap.min.css";

function ApiItems() {
  return (
    <>
      {Apis.map((api) => (
        <ListGroup.Item
          as="li"
          variant="primary"
          action
          key={api.name}
          className="apiListItem"
        >
          <Link to={api.route}>{api.name}</Link>
        </ListGroup.Item>
      ))}
    </>
  );
}

export default ApiItems;
