import React, { useState, useEffect, useContext } from "react";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchCard from "./SearchCard";
import { SearchContext } from "../../context/SearchContext";

function SearchResults() {
  // const [searchResults, setSearchResults] = useOutletContext();
  const { searchResults } = useContext(SearchContext);

  const [resp, setResp] = useState([]);

  useEffect(() => {
    // console.log(searchResults);
    {
      searchResults
        ? setResp(
            searchResults.map((p) => (
              <SearchCard
                key={searchResults.indexOf(p)}
                username={p.username}
                /* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
                userID={p._id}
                profilePic={p.profilePicture}
                followings={p.followings}
                followers={p.followers}
              />
            ))
          )
        : setResp([
            <Card>
              <Card.Title style={{ textAlign: "center", paddingTop: "2rem" }}>
                No results to display
              </Card.Title>
            </Card>,
          ]);
    }
    // console.log(resp);
  }, [searchResults]);

  return (
    <Container>
      {/* {searchResults.length > 0 ? (searchResults.map((p) => <SearchCard key={searchResults.indexOf(p)} username={p.username} userID={p._id} profilePic={p.profilePicture} following={p.following} followers={p.followers} />)) : <p>no res</p> } */}
      {resp}
    </Container>
  );
}
export default SearchResults;
