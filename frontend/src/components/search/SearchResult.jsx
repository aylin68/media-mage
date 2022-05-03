import React, { useState, useEffect, useContext } from "react";
import "./feed.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import SearchCard from "./SearchCard"


function Feed() {
  const [posts, setPosts] = useState([]);
  const { user, error } = useContext(AuthContext);
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/" + user._id);
      // console.log(res);
      // console.log(res.data);
      // setPosts(res.data);
      setSearchResults(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      //console.log(posts);
    };
    // console.log({ user });
    console.log(user._id);
    // console.log(posts);
    // console.log(posts[0]);
    fetchPosts();
  }, [user._id]);

  return (
    <Container>
      {searchResults.map((p) => (
        <SearchCard
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
        />
      ))}
    </Container>
  );
}
export default Feed;
