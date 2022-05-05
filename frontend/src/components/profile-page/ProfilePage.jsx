import React, { useState, useEffect } from "react";
import { Card, Stack, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import icon from '../../assets/images/icon.png'


const ProfilePage = (props) => {
  /* const search = props.location.search; */
  //   const { user, error } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    axios.get(window.location.pathname).then((response) => {
      setUser(response.data);
      setDataLoaded(true);
    });
    // console.log(res.data)
  }, [props]);

  return (
    <Card style={{ display: "flex", padding: '1rem' }}>
      <Stack direction="horizontal">

      <Stack>
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
          <img
          src={icon}
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
          )}
      <Link to={`/users/${user._id}`}>{user.username}'s profile page</Link>
      <div className="infoDiv">followers: {dataLoaded ? user.followers.length : null}</div>
      <div className="infoDiv">following: {dataLoaded ? user.followings.length : null}</div>
      {user.city ? (
        <div>
          <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon> `${user.city}`
        </div>
      ) : null}
      </Stack>
      <Stack gap="1">
        <Button>follow</Button>
        <Button>unfollow</Button>
      </Stack>
      </Stack>
    </Card>
  );
};

export default ProfilePage;
