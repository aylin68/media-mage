import React from "react";
import "./feed.css";
import { Container } from "react-bootstrap";
import Post from "../post/post";
import "bootstrap/dist/css/bootstrap.min.css";

function Feed() {
  return (
    <Container className="feedBody">
      <Post type="text" postID="1" length="3" />
      <Post type="image" postID="2" length="1" />
      <Post type="weather" postID="3" length="7" />
      <Post type="text" postID="4" length="6" />
      <Post type="text" postID="5" length="2" />
      <Post type="text" postID="6" length="9" />
      <Post type="text" postID="7" length="4" />
    </Container>
  );
}
export default Feed;
