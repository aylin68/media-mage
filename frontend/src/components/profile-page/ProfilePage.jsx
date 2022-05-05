import React, { useState, useEffect, useContext } from "react";
import { Card, Stack, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import icon from '../../assets/images/icon.png'
import { AuthContext } from "../../context/AuthContext";


const ProfilePage = (props) => {
  /* const search = props.location.search; */
  const { user, error } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [amFollowing, setAmFollowing] = useState(false)
  const [fn, setFn] = useState();
  const [fr, setFr] = useState();

  useEffect(() => {
      const fetchUsers = async () => {
        axios.get(window.location.pathname).then(response =>{
          setProfileUser(response.data);
          setAmFollowing(response.data.followers.includes(user._id));
          setFn(response.data.followings.length);
          setFr(response.data.followers.length);
          setDataLoaded(true);
        })
      }
      fetchUsers();       
    }, []);
    // console.log(res.data)

  const handleFollow = async () => {
    const userToChange = {
      userId: user._id,
    };
    try {
      await axios.patch("/users/" + profileUser._id + "/follow", userToChange);
      console.log("success");
      setAmFollowing(!amFollowing);
      setFr(fr + 1);
    } catch (error) {
      console.log(error);
  };
  }

  const handleUnfollow = async () => {
    const userToChange = {
      userId: user._id,
    };
    try {
      await axios.patch("/users/" + profileUser._id + "/unfollow", userToChange);
      console.log("success");
      setAmFollowing(!amFollowing);
      setFr(fr - 1);
    } catch (error) {
      console.log(error);
  };
  }



  return (
    <Card style={{ display: "flex", padding: '1rem' }}>
      <Stack direction="horizontal">

      <Stack>
      {profileUser.profilePic ? (
        <img
        src={profileUser.profilePic}
        alt={profileUser.username}
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
          alt={profileUser.username}
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
      <Link to={`/users/${profileUser._id}`}>{profileUser.username}'s profile page</Link>
      <div className="infoDiv">followers: {dataLoaded ? fr : null}</div>
      <div className="infoDiv">following: {dataLoaded ? fn : null}</div>
      {profileUser.city ? (
        <div>
          <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon> `${profileUser.city}`
        </div>
      ) : null}
      </Stack>
      <Stack gap="1">
      {dataLoaded ? (profileUser._id === user._id ? null : amFollowing ? <Button onClick={handleUnfollow}>Unfollow</Button> : <Button onClick={handleFollow}>Follow</Button>) : null}
      </Stack>
      </Stack>
    </Card>
  );
};

export default ProfilePage;
