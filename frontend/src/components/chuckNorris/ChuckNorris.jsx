import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chuckNorris.css";
import { AuthContext } from "../../context/AuthContext";

const ChuckNorris = () => {
  const [quote, setQuote] = useState("");
  const { user } = useContext(AuthContext);

  const SearchHandel = () => {
    const url = "https://api.chucknorris.io/jokes/random";
    axios
      .get(url)
      .then((response) => {
        setQuote(response.data);
        console.log(quote.value);
      })
      .catch((err) => console.log(err));
  };

  const createChuckPost = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="">
        <h1>Hello Chuck</h1>
        <div className="">
          <button className="" onClick={SearchHandel}>
            click me
          </button>
          <h2>{quote.value}</h2>
        </div>
        <button className="" onClick={createChuckPost}>
          Create a Post
        </button>
      </div>
    </>
  );
};
export default ChuckNorris;
