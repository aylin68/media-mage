import React, { useState, useEffect, useContext } from "react";
import "./feed.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import Post from "@components/post/post";
import PostListComponent from "../post/postListComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import CreatePostInput from "@components/createPost/CreatePostInput";
import PostList from "../post/PostList";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { user, error } = useContext(AuthContext);
  const [postList, setPostList] = useState([...PostList]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("posts/timeline/6266bc5a4ba5823fb42d182e");
  //     console.log(res);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/" + user._id);

      // setPosts(res.data);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      console.log(posts);
    };

    fetchPosts();
  }, [user._id]);

  return (
    <Container>
      <CreatePostInput postList={postList} setPostList={setPostList} />

      <PostListComponent postList={postList} setPostList={setPostList} />
      {posts.map((p) => (
        <Post
          key={posts.indexOf(p)}
          type={p.desc}
          postID={posts.indexOf(p)}
          length={p.desc.length}
        />
      ))}
    </Container>
  );
}
export default Feed;
