import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import { Card, Button, Stack, Form } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faThumbsUp as fasThumbsUp,
  faShareFromSquare as fasShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as farThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";



function commentSection(props){
    const {comments, postID, likes } = props;
    const [commentList, setCommentList] = useState([...comments])
    const { user } = useContext(AuthContext);
    const comment = useRef();
    const [isLiked, setIsLiked] = useState(likes.includes(user._id));

    const handleComment = async (e) => {
        e.preventDefault();
        const nComment = {
          username: user.username,
          userId: user._id,
          comment: comment.current.value,
          createdAt: new Date(), 
        };
        try {
          await axios.patch("/posts/comment/" + postID, nComment);
          window.location.reload();
        } catch (error) {
          console.log(error);
      };
    }

    const handleLike = async () => {
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
    <>
        <Stack className="comment-section" direction="vertical" gap={2}>
        <Form onSubmit={handleComment} >
        <Stack direction="horizontal" gap={3}>
        <Form.Control ref={comment} className="me-auto " placeholder="Comment..." />
        <Button variant="primary" type="submit" >COMMENT</Button>
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
        <FontAwesomeIcon icon={fasShareFromSquare} />
        
        </Stack>
        </Form>
        {commentList.map((comment) => 
            <Stack direction="horizontal" key={comment.createdAt} gap={1} className="full-comment">
            <img alt="icon" src="src/assets/images/icon.png" style={{
                width: "2rem",
                height: "auto",
                borderRadius: "50%",
                fitContent: "cover",
                marginRight: " 0.5rem",
                backgroundColor: "transparent"
            }}/>
            <Stack direction="vertical" gap={1} className="comment-body">
            <Card.Text className="comment-username">
              <Link to="/profile/user_id">
              {comment.username}
              </Link>
              </Card.Text>
            <Card.Text >{comment.comment}</Card.Text>
            </Stack>
            <Card.Text>{ new Date(comment.createdAt).toString()}</Card.Text>
            <hr />
            </Stack>
        )}
        </Stack>
        </>

    );

}



export default commentSection;