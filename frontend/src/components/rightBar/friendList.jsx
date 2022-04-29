import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";

const FriendList = () => {
  return (
    <ListGroup.Item>
      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> username: online
    </ListGroup.Item>
  );
};

export default FriendList;
