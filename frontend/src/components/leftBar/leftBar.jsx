import React from "react";
import "./leftBar.css";
import { ListGroup } from "react-bootstrap";
import ApiItems from "./ApiItems";
import "bootstrap/dist/css/bootstrap.min.css";

function LeftBar() {
  return (
    <ListGroup className="apiList">
      <ApiItems />
    </ListGroup>
  );
}

export default LeftBar;
