import React from "react";
//import { useState } from "react/cjs/react.production.min";
//import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import PostList from "./PostList";
import Post from "./post";

function PostListComponent(props) {
  const { postList, setPostList } = props;

  return (
    <>
      {postList.map((post) => (
        <Post
          key={post.postID}
          username={post.username}
          profilePic={post.profilePic}
          postType={post.postType}
          userID={post.userId}
          postContent={post.postContent}
          postTitle={post.postTitle}
          comments={post.comments}
          likes={post.likes}
          dislikes={post.dislikes}
          createdAt={post.createdAt}
        />
      ))}
    </>
  );
}

export default PostListComponent;
