import React from "react";
//import { useState } from "react/cjs/react.production.min";
//import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import PostList from "./PostList";
import Post from "./post";

function PostListComponent(props) {
const {postList, setPostList} = props;

  return (
    <>
      {postList.map((post) => (
        <Post type={post.type} length={post.length} postID={post.postID} postContent={post.postContent}/>
      ))}
    </>
  );
}

export default PostListComponent;
