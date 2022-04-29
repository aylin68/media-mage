import React, { useState, useContext, useRef } from "react";
//import { useState } from "react/cjs/react.production.min";
import { Card, Button, Stack, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import PropTypes from "prop-types";
import "./CreatePost.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function CreatePostInput(props) {
  //   const { postList, setPostList } = props;
  //   const [newPostContent, setNewPostContent] = useState("");
  const { user } = useContext(AuthContext);
  const desc = useRef();

  //   const handleEnterDown = (event) => {
  //     if (event.key === "Enter") {
  //       handlePostCreation();
  //     }
  //   };

  //   const handlePostCreation = () => {
  //     const newPost = {
  //       type: "text",
  //       length: 1,
  //       postId: 1,
  //       postContent: newPostContent,
  //     };
  //     setPostList([newPost, ...postList]);
  //     setNewPostContent("");
  //     console.log(postList);
  //     console.log(newPostContent);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    try {
      await axios.post("/posts", nPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="create-post">
        <Card.Body>
          <Card.Title>Create a text post</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3}>
              <Form.Control
                className="me-auto"
                as="input"
                type="text"
                //   value={newPostContent}
                placeholder="Create a text post..."
                //   onChange={(e) => setNewPostContent(e.target.value)}
                ref={desc}
              />
              <Button
                variant="primary"
                type="submit"
                //   onClick={handlePostCreation}
                //   onKeyDown={handleEnterDown}
              >
                POST
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
      <hr className="outside-card-hr" />
    </>
  );
}

export default CreatePostInput;
