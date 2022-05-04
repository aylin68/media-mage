import React from "react";
import "./post.css";
import { Card, Stack, } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import PropTypes from "prop-types";
import CommentSection from "./commentSection"


function Post(props) {
  const { username, postID, postType, userId, profilePic, postContent, postTitle, comments, likes, createdAt} = props;

  return (
    <Card>
      <Card.Header>
        <Stack direction="horizontal" className="user-post-header" >
        <img alt="icon" src={profilePic} style={{
                width: "2rem",
                height: "auto",
                borderRadius: "50%",
                fitContent: "cover",
                marginRight: " 0.5rem",
                backgroundColor: "transparent"
              }}/>
        <Link to={`profile/${userId}`}>{username}</Link>
        <span className="post-time">{new Date(createdAt).toString()}</span>
        </Stack>
      </Card.Header> 
      <Card.Body>
      { postTitle ? <Card.Title> {postTitle} </Card.Title> : null}
        {postType === "text" ? <Card.Text className="post-content">{postContent}</Card.Text> : null}
        {postType === "image" ? (
          <img alt="random" src="https://picsum.photos/400/320" />
        ) : null}
        {postType === "weather" ? (
          <img alt="random" src="https://picsum.photos/600/420" />
        ) : null}
        <hr />
        <CommentSection comments={comments} likes={likes} postID={postID}/>
      </Card.Body>
    </Card>
  );
}

// Post.propTypes = {
//   type: PropTypes.string.isRequired,
//   postID: PropTypes.number.isRequired,
//   length: PropTypes.number.isRequired,
// };

export default Post;
