import React, { useState, useEffect, useContext  } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import SearchCard from "./SearchCard";
import {useOutletContext} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";


function SearchResults() {
  // const [searchResults, setSearchResults] = useOutletContext();
  const {searchResults, setSearchResults} = useContext(SearchContext);
  
  let [resp, setResp] = useState([]);

  const fetchUsers = async () => {
        const res = await axios.get("/users/search/" + searchResults);
        console.log("res" + res );
        setResp(res.data) ;
        console.log(resp);
      };

  useEffect(() => {
    console.log(searchResults);
    {searchResults ? setResp(searchResults.map((p) => <SearchCard key={searchResults.indexOf(p)} username={p.username} userID={p._id} profilePic={p.profilePicture} following={p.following} followers={p.followers} />)) : <p>nothing to display</p>}
    console.log(searchResults);
  }, [searchResults]);

  return (
    <Container>
      {/* {searchResults.length > 0 ? (searchResults.map((p) => <SearchCard key={searchResults.indexOf(p)} username={p.username} userID={p._id} profilePic={p.profilePicture} following={p.following} followers={p.followers} />)) : <p>no res</p> } */}
      {resp}
      
    </Container>
  );
}
export default SearchResults;
