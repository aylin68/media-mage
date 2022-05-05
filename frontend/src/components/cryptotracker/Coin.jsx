import React, { useContext } from "react";
import { Card, Stack, Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Coin = ({ name, image, symbol, price, volume, coinContent}) => {
  const { user } = useContext(AuthContext);
  const handleCoinPost = async () => {
    const coinInfo = [name, image, symbol, price, volume];

    const nPost = {
      userId: user._id,
      postContent: "coin",
      weatherContent: {},
      postTitle: "Coin",
      postType: "coin",
      username: user.username,
      likes: [],
      comments: [],
      profilePic: "src/assets/images/icon.png",
      coinContent: coinInfo,
    };
    try {
      await axios.post("/posts", nPost);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <>
      {coinContent? 
    <Card className="coinCard" style={{ margin: "0", /* float: 'left', width: '100%' */}}>
      <Stack direction="horizontal" gap={2}>
        <img
          className="coinLogo"
          src={coinContent[1]}
          alt={coinContent[0]}
          style={{ width: "2.5rem" }}
          />
        <h2 className="coinName">{coinContent[0]}</h2>
        <p className="coinSymbol">{coinContent[2]}</p>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <h4 className="coinPrice">€{coinContent[3]} </h4>
        <p className="coinVolume">€{coinContent[4].toLocaleString()}</p>
      </Stack>
      </Card>
:      <Card className="coinCard" style={{ margin: "0" }}>
<Stack direction="horizontal" gap={2}>
  <img
    className="coinLogo"
    src={image}
    alt={name}
    style={{ width: "2.5rem" }}
    />
  <h2 className="coinName">{name}</h2>
  <p className="coinSymbol">{symbol}</p>
</Stack>
<Stack direction="horizontal" gap={2}>
  <h4 className="coinPrice">€{price} </h4>
  <p className="coinVolume">€{volume.toLocaleString()}</p>
</Stack>
<Button onClick={handleCoinPost}>post to feed</Button>
</Card>
} 
    </>
  );
};

export default Coin;
