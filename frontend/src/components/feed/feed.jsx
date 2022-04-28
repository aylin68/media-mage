import React, { useState, useEffect } from "react";
import "./feed.css";
//import axios from "axios";
import { Container } from "react-bootstrap";
import PostListComponent from "../post/postListComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePostInput from "@components/createPost/CreatePostInput";
import PostList from "../post/PostList";

function Feed() {
  //const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("posts/timeline/6266bc5a4ba5823fb42d182e");
  //     console.log(res);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, []);

const [postList, setPostList] = useState([...PostList])

  return (
    <Container>
      <CreatePostInput postList={postList} setPostList={setPostList}/>
      <PostListComponent postList={postList} setPostList={setPostList}/>
    </Container>
  );
}
export default Feed;
