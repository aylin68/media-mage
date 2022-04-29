import React, { useState } from "react";
import "./post.css";
import { Card, Button, Stack, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import {
  faThumbsUp as fasThumbsUp,
  faThumbsDown as fasThumbsDown,
  faShareFromSquare as fasShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as farThumbsUp,
  faThumbsDown as farThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Post(props) {
  const { type, postID, length, postContent } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const rows = [];

  for (let i = 0; i < length; i += 1) {
    rows.push(<Card.Text key={i}>{postContent}</Card.Text>);
  }

  return (
    <Card>
      <Card.Header>Example {type} Post</Card.Header>
      <Card.Body>
        <Card.Title>
          This is an example of a {type} post with ID {postID} and length{" "}
          {length}
        </Card.Title>
        {type === "text" ? rows : null}
        {type === "image" ? (
          <img alt="random" src="https://picsum.photos/400/320" />
        ) : null}
        {type === "weather" ? (
          <img alt="random" src="https://picsum.photos/600/420" />
        ) : null}
        <hr />
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Comment..." />
          <Button variant="primary">COMMENT</Button>
          <div className="vr" />
          <FontAwesomeIcon
            role="button"
            tabIndex={0}
            aria-label="Thumbs up"
            icon={isLiked ? fasThumbsUp : farThumbsUp}
            // className="fa-regular fa-thumbs-up fa-xl"
            onClick={() => {
              setIsLiked(!isLiked);
            }}
            onKeyDown={null}
          />
          <FontAwesomeIcon
            role="button"
            tabIndex={0}
            aria-label="Thumbs down"
            icon={isDisliked ? fasThumbsDown : farThumbsDown}
            //  className="fa-regular fa-thumbs-down fa-xl"
            onClick={() => {
              setIsDisliked(!isDisliked);
            }}
            onKeyDown={null}
          />
          <FontAwesomeIcon icon={fasShareFromSquare} />
        </Stack>
      </Card.Body>
    </Card>
  );
}

Post.propTypes = {
  type: PropTypes.string.isRequired,
  postID: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Post;
