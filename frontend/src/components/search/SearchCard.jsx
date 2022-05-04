import React, {useContext, useState} from "react";
//import "./post.css";
import "./SearchCard.css"
import { Card, Stack, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import PropTypes from "prop-types";
import { AuthContext } from "../../context/AuthContext";


function SearchCard(props) {
  const { username, userID, profilePic, following =[], followers=[]} = props;
  const { user} = useContext(AuthContext);
  const fn = following.length;
  const fr = followers.length;
  const [amFollowing, setAmFollowing] = useState(following.includes(user._id))

  const handleFollow = async () => {
    const userToChange = {
      userId: user._id,
    };
    try {
      await axios.patch("/posts/likes/" + postID, userToChange);
      console.log("success");
      setIsLiked(!isLiked);
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
          <Card.Title> {username} </Card.Title>
          <Card.Text >Followers: {fn} </Card.Text>
          <Card.Text >Following {fr} </Card.Text>
          </Stack>
          <div className="vr" />
          <Button onClick={handleFollow}>{following.includes(user._id) ? "Unfollow" : "Follow"}</Button>
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
