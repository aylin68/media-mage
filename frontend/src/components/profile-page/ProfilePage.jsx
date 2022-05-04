import React, {useContext} from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { user, error } = useContext(AuthContext);

  return (
    <Card> 
    {user.profilePic? <img src={user.profilePic} alt={user.username} style={{width: "4rem", height: "auto", borderRadius: "50%", fitContent: "cover", marginRight: " 0.5rem", backgroundColor: "transparent",}}/> : <FontAwesomeIcon icon={faUser} style={{background: 'none', color: 'green'}}></FontAwesomeIcon>}
        <Link to={`/profile/${user._id}`}>`${user.username}'s profile page`</Link>
        <span>{user.followers}</span>
        <span>{user.following}</span>
        {user.city?  <div><FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon> `${user.city}`</div> : null }
    </Card>
  );
};

export default ProfilePage