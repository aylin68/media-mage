import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Card, Stack, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./zenQuotes.css";
import { AuthContext } from "../../context/AuthContext";

const ZenQuotes = () => {
  const [quote, setQuote] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const { user } = useContext(AuthContext);
  const rand = Math.floor(Math.random() * 1643);

  const SearchHandel = () => {
    // const url = "https://zenquotes.io/api/random/";
    const url = "https://type.fit/api/quotes";
    axios
      .get(url)
      .then((response) => {
        setQuote(response.data);
        setDataLoaded(true);
        console.log(quote[rand].text);
        console.log(response.data[rand].text);
        console.log(response.data[rand].author);
      })
      .catch((err) => console.log(err));
  };

  const createZenPost = async (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Card className="">
        <Card.Title>Hello Zen</Card.Title>
        <div className="">
          <Button className="" onClick={SearchHandel}>
            click me
          </Button>
          <h2>{dataLoaded ? "the quote is: " + quote[rand].text : null}</h2>
        </div>
        <Button className="" onClick={createZenPost}>
          Create a Post
        </Button>
      </Card>
    </Container>
  );
};
export default ZenQuotes;
