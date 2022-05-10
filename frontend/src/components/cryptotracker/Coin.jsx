import React, { useContext, useRef, useState } from "react";
import { Card, Stack, Button, Modal, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import axios from "@services/axios";
const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  percentage,
  coinContent,
}) => {
  const { user } = useContext(AuthContext);
  const postTitle = useRef();
  const handleCoinPost = async () => {
    const coinInfo = [name, image, symbol, price, volume, percentage];

    const nPost = {
      userId: user._id,
      postContent: "coin",
      weatherContent: {},
      postTitle: postTitle.current.value,
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {coinContent ? (
        <Card
          className="coinCard"
          style={{ margin: "0" /* float: 'left', width: '100%' */ }}
        >
          <Stack direction="horizontal" gap={2}>
            <img
              className="coinLogo"
              src={coinContent[1]}
              alt={coinContent[0]}
              style={{ width: "2.5rem" }}
            />
            <h2 className="coinName">{coinContent[0]}</h2>
            <p className="coinSymbol">{coinContent[2].toUpperCase()}</p>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <h4 className="coinPrice">€{coinContent[3]} </h4>
            <p className="coinVolume">€{coinContent[4].toLocaleString()}</p>
            {coinContent[5] >= 0 ? (
              <p className="coinVolume" style={{ color: "green" }}>
                %{coinContent[5]}
              </p>
            ) : (
              <p className="coinVolume" style={{ color: "red" }}>
                %{coinContent[5]}
              </p>
            )}
          </Stack>
        </Card>
      ) : (
        <Card className="coinCard" style={{ margin: "0" }}>
          <Stack direction="horizontal" gap={2}>
            <img
              className="coinLogo"
              src={image}
              alt={name}
              style={{ width: "2.5rem" }}
            />
            <h2 className="coinName">{name}</h2>
            <p className="coinSymbol">{symbol.toUpperCase()}</p>
          </Stack>
          <Stack
            direction="horizontal"
            gap={2}
            style={{ justifyContent: "space-between" }}
          >
            <h4 className="coinPrice">€{price} </h4>
            <p className="coinVolume">€{volume.toLocaleString()}</p>
            {percentage >= 0 ? (
              <p className="coinVolume" style={{ color: "green" }}>
                %{percentage}
              </p>
            ) : (
              <p className="coinVolume" style={{ color: "red" }}>
                %{percentage}
              </p>
            )}
          </Stack>
          <Button onClick={handleShow}>post to feed</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>choose post title</Form.Label>
                  <Form.Control as="textarea" rows={3} ref={postTitle} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCoinPost}>
                submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
      )}
    </>
  );
};

export default Coin;
