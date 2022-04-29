import React, { useState, useEffect, useContext } from "react";
import "./feed.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import PostListComponent from "../post/postListComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import CreatePostInput from "@components/createPost/CreatePostInput";
import PostList from "../post/PostList";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { user, error } = useContext(AuthContext);
  const [postList, setPostList] = useState([...PostList])

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
      console.log(res);
      console.log(res.data);
      setPosts(res.data);
      console.log(posts);
    };
    console.log({ user });
    console.log(user._id);
    console.log(posts);
    console.log(posts[0]);
    fetchPosts();
  }, [user._id]);

  return (
    <Container>
      {posts.map((p) => (
        <Post type={p.desc} postID={posts.indexOf(p)} length={p.desc.length} />
      ))}
      <CreatePostInput postList={postList} setPostList={setPostList}/>
      <PostListComponent postList={postList} setPostList={setPostList}/>

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
