import axios from "@services/axios";
import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chuckNorris.css";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/AuthContext";

function ChuckNorris(props) {
  const { chuckContent, showSearch } = props;
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
        // console.log(quote.value);
      })
      .catch((err) => console.error(err));
  };

  const createChuckPost = async (e) => {
    e.preventDefault();
    const nPost = {
      /* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
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
      console.error(error);
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
    <Container>
      <Card style={{ justifyContent: "center", display: "flex" }} className="">
        {showSearch ? (
          <div>
            <Card.Title className="title">
              Have fun with Chuck Norris
            </Card.Title>

            <Button
              className="mx-auto d-block"
              onClick={SearchHandel}
              variant="outline-secondary"
            >
              Give me a new quote
            </Button>
          </div>
        ) : null}
        <h2 className="quote">{quote.value}</h2>
        {/* <h2>{dataLoaded ? quote.value : null}</h2> */}

        {showSearch ? (
          <Button className="btn-share" onClick={createChuckPost}>
            Share the quote
          </Button>
        ) : null}
        <h2>{quote.value}</h2>
        {/* <h2>{dataLoaded ? quote.value : null}</h2> */}

        {dataLoaded ? (
          <Button className="" onClick={createChuckPost}>
            Create a Post
          </Button>
        ) : null}
      </Card>
    </Container>
  );
}

ChuckNorris.propTypes = {
  chuckContent: PropTypes.shape({}),
  showSearch: PropTypes.bool,
};

ChuckNorris.defaultProps = {
  chuckContent: {},
  showSearch: false,
};
export default ChuckNorris;
