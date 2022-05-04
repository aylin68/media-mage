import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const ProfilePage = (props) => {
  /* const search = props.location.search; */
  const { user, error } = useContext(AuthContext);
  const followerLength = user.followers.length;
  const followingLength = user.followings.length;
  const fetchUser = async () => {
    const res = await axios.get("users/" + user._id);
    setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  };
  {
    /* console.log("id; ", search); */
  }
  return (
    <Card style={{ display: "flex", justifyContent: "flex-start" }}>
      {user.profilePic ? (
        <img
          src={user.profilePic}
          alt={user.username}
          style={{
            width: "4rem",
            height: "auto",
            borderRadius: "50%",
            fitContent: "cover",
            marginRight: " 0.5rem",
            backgroundColor: "transparent",
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faUser}
          style={{ background: "none", color: "purple", float: "left" }}
        ></FontAwesomeIcon>
      )}
      <Link to={`/profile/${user._id}`}>{user.username}'s profile page</Link>
      <span>followers: {followerLength}</span>
      <span>following: {followingLength}</span>
      {user.city ? (
        <div>
          <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon> `${user.city}`
        </div>
      ) : null}
    </Card>
  );
};

export default ProfilePage;
