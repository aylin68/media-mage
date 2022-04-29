import React, { useState } from "react";
import "./post.css";
import { Card, Button, Stack, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  const { user, type, postID, length, postContent, postTitle, comments } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [commentList, setCommentList] = useState([...comments])
  const [newCommentContent, setNewCommentContent] = useState("")
  const rows = [];

  for (let i = 0; i < length; i += 1) {
    rows.push(<Card.Text key={i}>{postContent}</Card.Text>);
  }

  // const showCommentList = () => {
  //   commentList.map((comment) => 
  //     <Stack direction="horizontal" gap={3} key={comment.time}>
  //       <Card.Text >{comment.user}</Card.Text>
  //       <Card.Text >{comment.comment}</Card.Text>
  //       <Card.Text>{comment.time}</Card.Text>
  //       <div className="vr" />
  //     </Stack>
  //   )
  // }

  const handleCommentCreation = () => {
    const newComment = {user: user.username, time: "", comment: newCommentContent};
    setCommentList([...comments, newComment]);
    console.log(commentList);
    setNewCommentContent("");
  }

  return (
    <Card>
      <Card.Header>
        <Stack direction="horizontal" className="user-post-header" >
        <img alt="icon" src="src/assets/images/icon.png" style={{
                width: "2rem",
                height: "auto",
                // margin: "0, 1.5rem",
              }}/>
        <Link to="{user.username}">{user.username}</Link>
        </Stack>
      </Card.Header> 
      <Card.Body>
      { postTitle ? <Card.Title> {postTitle} </Card.Title> : null}
        {type === "text" ? rows : null}
        {type === "image" ? (
          <img alt="random" src="https://picsum.photos/400/320" />
        ) : null}
        {type === "weather" ? (
          <img alt="random" src="https://picsum.photos/600/420" />
        ) : null}
        <hr />
        <Stack className="comment-section" direction="vertical" gap={2}>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Comment..." value={newCommentContent} onChange={(e) => setNewCommentContent(e.target.value)}/>
          <Button variant="primary" onClick={handleCommentCreation}>COMMENT</Button>
          <div className="vr" />
          <FontAwesomeIcon
            role="button"
            tabIndex={0}
            aria-label="Thumbs up"
            icon={isLiked ? fasThumbsUp : farThumbsUp}
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
        
        
           {commentList.map((comment) => 
            <Stack direction="horizontal" key={comment.time} gap={1} className="full-comment">
            <img alt="icon" src="src/assets/images/icon.png" style={{
                width: "2rem",
                height: "auto",
                margin: "0, 1.5rem",
              }}/>
            <Stack direction="vertical" gap={1} className="comment-body">
            <Card.Text className="comment-username">{comment.user}</Card.Text>
            <Card.Text >{comment.comment}</Card.Text>
            </Stack>
            <Card.Text>{comment.time}</Card.Text>
            <hr />
            </Stack>
          )}
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
