import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";

function FriendList() {
  return (
    <ListGroup.Item style={{ display: "flex", alignItems: "center" }}>
      <FontAwesomeIcon
        icon={faUser}
        style={{ background: "none", color: "purple", padding: "0 .25rem" }}
      />
      username: online{" "}
      <FontAwesomeIcon
        icon={faCircle}
        style={{
          background: "none",
          color: "green",
          fontSize: ".5rem",
          padding: "0 .25rem",
        }}
      />
    </ListGroup.Item>
  );
}

export default FriendList;
