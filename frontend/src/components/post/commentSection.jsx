import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import { Card, Button, Stack, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { faThumbsUp as fasThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "@services/axios";
import { AuthContext } from "../../context/AuthContext";

function commentSection(props) {
  const { comments, postID, likes } = props;
  const [commentList, setCommentList] = useState([...comments]);
  const { user } = useContext(AuthContext);
  const comment = useRef();
  /* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
  const [isLiked, setIsLiked] = useState(likes.includes(user._id));
  const [numLikes, setNumLikes] = useState(likes.length);

  const handleComment = async (e) => {
    e.preventDefault();
    const nComment = {
      username: user.username,
      userId: user._id,
      comment: comment.current.value,
      createdAt: new Date().toUTCString(),
      profilePic: user.profilePicture,
    };
    try {
      await axios.patch(`/posts/comment/${postID}`, nComment);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async () => {
    const userToChange = {
      userId: user._id,
    };
    try {
      await axios.patch(`/posts/likes/${postID}`, userToChange);
      // console.log("success");
      setIsLiked(!isLiked);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack className="comment-section" direction="vertical" gap={2}>
      <Form onSubmit={handleComment}>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            ref={comment}
            className="me-auto "
            placeholder="Comment..."
          />
          <Button variant="primary" type="submit">
            COMMENT
          </Button>
          <div className="vr" />
          <FontAwesomeIcon
            role="button"
            tabIndex={0}
            aria-label="Thumbs up"
            icon={isLiked ? fasThumbsUp : farThumbsUp}
            onClick={() => {
              handleLike();
            }}
            onKeyDown={null}
          />
          <Card.Text style={{ textAlign: "center" }}>
            {isLiked ? numLikes + 1 : numLikes} likes{" "}
          </Card.Text>
        </Stack>
      </Form>
      {commentList.map((com) => (
        <Stack
          direction="horizontal"
          key={com.createdAt}
          gap={1}
          className="full-comment"
        >
          <img
            alt="icon"
            src={com.profilePic}
            style={{
              width: "2rem",
              height: "auto",
              borderRadius: "50%",
              fitContent: "cover",
              marginRight: " 0.5rem",
              backgroundColor: "transparent",
            }}
          />
          <Stack direction="vertical" gap={1} className="comment-body">
            <Card.Text className="comment-username">
              <Link to="/profile/user_id">{com.username}</Link>
            </Card.Text>
            <Card.Text>{com.comment}</Card.Text>
          </Stack>
          <Card.Text>{moment(com.createdAt).fromNow()}</Card.Text>
          <hr />
        </Stack>
      ))}
    </Stack>
  );
}

export default commentSection;
