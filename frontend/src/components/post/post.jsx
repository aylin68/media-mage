import React, { useState } from "react";
import "./post.css";
import { Card, Button, Stack, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import CommentSection from "./commentSection"

function Post(props) {
  const { username, postID, postType, userID, profilePic, postContent, postTitle, comments, likes, dislikes } = props;

  return (
    <Card>
      <Card.Header>
        <Stack direction="horizontal" className="user-post-header" >
        <img alt="icon" src={profilePic} style={{
                width: "2rem",
                height: "auto",
                borderRadius: "50%",
                fitContent: "cover",
                marginRight: " 0.5rem"
              }}/>
        <Link to="/">{username}</Link>
        </Stack>
      </Card.Header> 
      <Card.Body>
      { postTitle ? <Card.Title> {postTitle} </Card.Title> : null}
        {postType === "text" ? <Card.Text >{postContent}</Card.Text> : null}
        {postType === "image" ? (
          <img alt="random" src="https://picsum.photos/400/320" />
        ) : null}
        {postType === "weather" ? (
          <img alt="random" src="https://picsum.photos/600/420" />
        ) : null}
        <hr />
        <CommentSection comments={comments} likes={likes} dislikes={dislikes} postID={postID}/>
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
