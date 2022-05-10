import axios from "@services/axios";
import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./zenQuotes.css";
import { AuthContext } from "../../context/AuthContext";

function ZenQuotes(props) {
  const { zenContent } = props;
  const [quote, setQuote] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { user } = useContext(AuthContext);
  const rand = Math.floor(Math.random() * 1643);

  const SearchHandel = () => {
    // const url = "https://zenquotes.io/api/random/";
    const url = "https://type.fit/api/quotes";
    axios
      .get(url)
      .then((response) => {
        setQuote(response.data[rand]);
        setDataLoaded(true);
        // console.log(quote);
      })
      .catch((err) => console.error(err));
  };

  const createZenPost = async (e) => {
    e.preventDefault();
    const nPost = {
      /* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
      userId: user._id,
      postContent: "zenquote",
      zenContent: quote,
      postTitle: "Zenquote",
      postType: "zenquote",
      username: user.username,
      likes: [],
      comments: [],
      profilePic: "src/assets/images/icon.png",
    };
    try {
      await axios.post("/posts", nPost);
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (zenContent) {
      setQuote(zenContent);
    } else {
      SearchHandel();
    }
  }, []);

  return (
    <Container>
      <Card className="">
        {dataLoaded ? (
          <div>
            <Card.Title>Hello Zen</Card.Title>

            <Button className="" onClick={SearchHandel}>
              click me
            </Button>
          </div>
        ) : null}
        {/* <h2>{dataLoaded ? quote.text : null}</h2> */}
        <h2>{quote.text}</h2>
        <h5>{quote.author}</h5>

        {dataLoaded ? (
          <Button className="" onClick={createZenPost}>
            Create a Post
          </Button>
        ) : null}
      </Card>
    </Container>
  );
}

ZenQuotes.propTypes = {
  zenContent: PropTypes.shape({}),
};
ZenQuotes.defaultProps = {
  zenContent: {},
};

export default ZenQuotes;
