import axios from "@services/axios";
import React, { useState, useEffect, useContext } from "react";
import { Card, Stack, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./chuckNorris.css";
import { AuthContext } from "../../context/AuthContext";

const Books = (props) => {
  const { showSearch, chuckContent } = props;
  const [quote, setQuote] = useState({});
  const { user } = useContext(AuthContext);
  const [dataLoaded, setDataLoaded] = useState(false);

  const SearchHandel = () => {
    const url = "https://api.chucknorris.io/jokes/random";
    axios
      .get(url)
      .then((response) => {
        setQuote(response.data);
        setDataLoaded(true);
        console.log(quote.value);
      })
      .catch((err) => console.log(err));
  };

  const createChuckPost = async (e) => {
    e.preventDefault();
    const nPost = {
      userId: user._id,
      postContent: "chuckquote",
      chuckContent: quote,
      postTitle: "Chuckquote",
      postType: "chuckquote",
      username: user.username,
      likes: [],
      comments: [],
      profilePic: "src/assets/images/icon.png",
    };
    try {
      await axios.post("/posts", nPost);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (chuckContent) {
      setQuote(chuckContent);
    } else {
      SearchHandel();
    }
  }, []);

  return (
    <>
      <Container>
        <Card className="">
          {showSearch ? (
            <div>
              <Card.Title>Hello Chuck</Card.Title>

              <Button className="" onClick={SearchHandel}>
                click me
              </Button>
            </div>
          ) : null}
          <h2>{quote.value}</h2>
          {/* <h2>{dataLoaded ? quote.value : null}</h2> */}

          {showSearch ? (
            <Button className="" onClick={createChuckPost}>
              Create a Post
            </Button>
          ) : null}
        </Card>
      </Container>
    </>
  );
};
export default Books;
