import React, { useState, useContext, useRef } from "react";
import { Card, Button, Stack, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import PropTypes from "prop-types";
import "./CreatePost.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function CreatePostInput(props) {
  const { user } = useContext(AuthContext);
  const postContent = useRef();
  const postTitle = useRef();

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      postContent.current.value.concat("\r");
      console.log(postContent.current.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nPost = {
      userId: user._id,
      postContent: postContent.current.value,
      weatherContent: {},
      postTitle: postTitle.current.value,
      postType: "text",
      username: user.username,
      likes: [],
      comments: [],
      profilePic: "src/assets/images/icon.png",
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
            <Stack className="post-input" direction="vertical" gap={3}>
              <Stack direction="horizontal" gap={3}>
                <Stack direction="vertical" gap={3}>
                  <Form.Control
                    ref={postTitle}
                    className="me-auto"
                    as="input"
                    type="text"
                    placeholder="Give your new post a title (or not)..."
                  />
                  <Form.Control
                    className="me-auto post-input-field"
                    as="textarea"
                    type="text"
                    //   value={newPostContent}
                    placeholder="Create a text post..."
                    //   onChange={(e) => setNewPostContent(e.target.value)}
                    ref={postContent}
                    onKeyDownCapture={handleEnterDown}
                  />
                </Stack>
                <Button
                  variant="primary submit-button"
                  type="submit"
                  //   onClick={handlePostCreation}
                  //   onKeyDown={handleEnterDown}
                >
                  POST
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
      <hr className="outside-card-hr" />
    </>
  );
}

//     return (
//         <>
//         <Card className="create-post">
//             <Card.Body>
//             <Card.Title>
//             Create a text post
//             </Card.Title>
//             <Stack className="post-input" direction="vertical" gap={3}>
//             <Form.Control className="me-auto" as="input" type="text" value={newPostTitle} placeholder="Give your new post a title (or not)..."  onChange={(e) => setNewPostTitle(e.target.value)}/>
//             <Stack direction="horizontal" gap={3}>
//             <Form.Control className="me-auto" as="textarea" type="text" value={newPostContent} placeholder="What's on your mind..."  onChange={(e) => setNewPostContent(e.target.value)}/>
//             <Button variant="primary" onClick={handlePostCreation} onKeyDown={handleEnterDown}>POST</Button>
//             </Stack>
//             </Stack>
//             </Card.Body>
//         </Card>
//         <hr className="outside-card-hr" />
//         </>
//     );

export default CreatePostInput;
