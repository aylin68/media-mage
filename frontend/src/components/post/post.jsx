import React, { useState } from "react";
import "./post.css";
import { Card, Button, Stack, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

function Post(props) {
  const { type, postID, length, postContent } = props;
  //const [isLiked, setIsLiked] = useState(false);
  
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
          <i
            role="button"
            tabIndex={0}
            aria-label="Thumbs up"
            className="fa-regular fa-thumbs-up fa-xl"
            onClick={(event) => {
              event.target.classList.toggle("fa-regular");
              event.target.classList.toggle("fa-solid");
            }}
            onKeyDown="null"
          />
          <i
           role="button"
           tabIndex={0}
           aria-label="Thumbs down"
           className="fa-regular fa-thumbs-down fa-xl"
           onClick={(event) => {
             event.target.classList.toggle("fa-regular");
             event.target.classList.toggle("fa-solid");
           }}
           onKeyDown="null"
          />
          <i className="fa-solid fa-share-from-square fa-xl" />
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
