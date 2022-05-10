import React, { useContext, useRef } from "react";
import { Card, Button, Stack, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "@services/axios";
// import PropTypes from "prop-types";
import "./CreatePost.css";
import { AuthContext } from "../../context/AuthContext";

function CreatePostInput() {
  const { user } = useContext(AuthContext);
  const postContent = useRef();
  const postTitle = useRef();

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      postContent.current.value.concat("\r");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nPost = {
      /* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
      userId: user._id,
      postContent: postContent.current.value,
      weatherContent: {},
      postTitle: postTitle.current.value,
      postType: "text",
      username: user.username,
      likes: [],
      comments: [],
      profilePic: user.profilePicture,
    };
    try {
      await axios.post("/posts", nPost);
      window.location.reload();
    } catch (error) {
      console.error(error);
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
                    onKeyDown={handleEnterDown}
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

export default CreatePostInput;
