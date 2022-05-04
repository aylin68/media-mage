import React from "react";
import "./post.css";
import { Card, Stack } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import PropTypes from "prop-types";
import CommentSection from "./commentSection";
import Weather from "../weather/Weather";

import "../weather/Weather.css";

function Post(props) {
  const {
    username,
    postID,
    postType,
    userID,
    profilePic,
    postContent,
    postTitle,
    comments,
    likes,
    createdAt,
  } = props;

  return (
    <Card>
      <Card.Header>
        <Stack direction="horizontal" className="user-post-header">
          <img
            alt="icon"
            src={profilePic}
            style={{
              width: "2rem",
              height: "auto",
              borderRadius: "50%",
              fitContent: "cover",
              marginRight: " 0.5rem",
              backgroundColor: "transparent",
            }}
          />
          <Link to="/">{username}</Link>
          <span className="post-time">{new Date(createdAt).toString()}</span>
        </Stack>
      </Card.Header>
      <Card.Body>
        {postTitle ? <Card.Title> {postTitle} </Card.Title> : null}
        {postType === "text" ? (
          <Card.Text className="post-content">{postContent}</Card.Text>
        ) : null}
        {postType === "image" ? (
          <img alt="random" src="https://picsum.photos/400/320" />
        ) : null}
        {postType === "weather" ? <Weather /> : null}
        <hr />
        <CommentSection comments={comments} likes={likes} postID={postID} />
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
