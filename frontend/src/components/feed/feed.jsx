import React, { useState, useEffect, useContext } from "react";
import "./feed.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import Post from "@components/post/post";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import CreatePostInput from "@components/createPost/CreatePostInput";
import PostList from "../post/PostList";
import moment from "moment";

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
      // console.log(res);
      // setPosts(res.data);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      //console.log(posts);
    };
    // console.log({ user });
    // console.log(user._id);
    // console.log(posts);
    // console.log(posts[0]);
    fetchPosts();
  }, [user._id]);
  /*   console.log(posts.map((a) => a.createdAt)); */

  return (
    <Container>
      <CreatePostInput postList={postList} setPostList={setPostList} />

      {/* <PostListComponent postList={postList} setPostList={setPostList} /> */}
      {posts.map((p) => (
        <Post
          key={posts.indexOf(p)}
          postType={p.postType}
          postID={p._id}
          username={p.username}
          userId={p.userId}
          likes={p.likes}
          comments={p.comments}
          profilePic={p.profilePic}
          postContent={p.postContent}
          postTitle={p.postTitle}
          createdAt={p.createdAt}
          weatherContent={p.weatherContent}
          coinContent={p.coinContent}
          zenContent={p.zenContent}
          chuckContent={p.chuckContent}
        />
      ))}
    </Container>
  );
}
export default Feed;
