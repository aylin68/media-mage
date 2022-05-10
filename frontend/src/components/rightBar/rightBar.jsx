import React, { useContext, useEffect, useState } from "react";
import "./rightBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function RightBar() {
  const { user, dispatch } = useContext(AuthContext);
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .post(`/users/many`, user.followings)
      .then((res) => {
        setFollowing(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.error(error));
    axios
      .post(`/users/many`, user.followers)
      .then((res) => {
        setFollower(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const friendsList = [];
    follower.forEach((i) => {
      following.forEach((j) => {
        if (i._id === j._id) {
          friendsList.push(i);
        }
      });
    });
    setFriends(friendsList);
    // console.log("test", friendsList);
  }, [follower, following]);

  const rows = [];

  for (let i = 0; i < friends.length; i++) {
    rows.push(
      <ListGroupItem style={{ width: "10rem" }}>
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "purple" }}
        ></FontAwesomeIcon>
        <Link to={`profile/${friends[i]._id}`} style={{ padding: "0 .5rem" }}>
          {friends[i].username}
        </Link>
      </ListGroupItem>
    );
  }
  return (
    <Container className="rightBarContainer" style={{ display: "flex" }}>
      <ListGroup>{rows}</ListGroup>
    </Container>
  );
}

export default RightBar;
