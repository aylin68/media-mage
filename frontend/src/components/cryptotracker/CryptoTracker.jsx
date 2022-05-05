import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Coin from "./Coin";

const CryptoTracker = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.id.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Card>
      <Form className="d-flex" style={{margin: '.5rem'}}>
        <FormControl
          type="search"
          placeholder="search cryptocurrencies"
          className="me-3"
          aria-label="Search"
          onChange={handleChange}
        />
        <Button variant="outline" id="searchText">
          <FontAwesomeIcon icon={faSearch} style={{ color: "purple" }} />
        </Button>
      </Form>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
          />
        );
      })}
    </Card>
  );
};

export default CryptoTracker;
