import React, {useContext, useState} from "react";
//import "./post.css";
import "./SearchCard.css"
import { Card, Stack, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import PropTypes from "prop-types";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


function SearchCard(props) {
  const { username, userID, profilePic, followings =[], followers=[]} = props;
  const { user} = useContext(AuthContext);
  const [fn, setFn] = useState(followings.length);
  const [fr, setFr] = useState(followers.length);
  const [amFollowing, setAmFollowing] = useState(followers.includes(user._id))

  const handleFollow = async () => {
    const userToChange = {
      userId: user._id,
    };
    try {
      await axios.patch("/users/" + userID + "/follow", userToChange);
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
      await axios.patch("/users/" + userID + "/unfollow", userToChange);
      console.log("success");
      setAmFollowing(!amFollowing);
      setFr(fr - 1);
    } catch (error) {
      console.log(error);
  };
  }


  return (
    <Card>
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          <img alt="random" src={profilePic} style={{
                width: "7rem",
                height: "auto",
                borderRadius: "50%",
                fitContent: "cover",
                backgroundColor: "transparent"
              }}/>
          <Stack direction="vertical" gap={1}>
          <Link to={`/users/${userID}`}> <Card.Title> {username} </Card.Title> </Link>
          <Card.Text >Followers: {fr} </Card.Text>
          <Card.Text >Following: {fn} </Card.Text>
          </Stack>
          <div className="vr" style={{leftMargin: "auto"}}/>
          {userID === user._id ? null : amFollowing ? <Button  onClick={handleUnfollow}>Unfollow</Button> : <Button onClick={handleFollow}>Follow</Button>}
        </Stack>
      </Card.Body>
    </Card>
  );
}

// Post.propTypes = {
//   type: PropTypes.string.isRequired,
//   postID: PropTypes.number.isRequired,
//   length: PropTypes.number.isRequired,
// };

export default SearchCard;
