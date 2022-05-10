import React from "react";
import "./post.css";
import "../weather/weather.css";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import Coin from "@components/cryptotracker/Coin";
import ZenQuotes from "@components/zenQuotes/ZenQuotes";
import ChuckNorris from "@components/chuckNorris/ChuckNorris";
import PropTypes from "prop-types";
import CommentSection from "./commentSection";
import Weather from "../weather/Weather";

function Post(props) {
  const {
    username,
    postID,
    postType,
    userId,
    profilePic,
    postContent,
    postTitle,
    comments,
    likes,
    createdAt,
    weatherContent,
    coinContent,
    zenContent,
    chuckContent,
  } = props;

  // let now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
  const finalDate = moment(createdAt).format("dddd, MMMM DD YYYY, HH:mm:ss ");

  return (
    <Card>
      <Card.Header>
        <Stack direction="horizontal" className="user-post-header">
          <img
            alt="icon"
            src={profilePic}
            style={{
              width: "2rem",
              height: "auto",
              borderRadius: "50%",
              fitContent: "cover",
              marginRight: " 0.5rem",
              backgroundColor: "transparent",
            }}
          />
          <Link to={`/profile/${userId}`}>{username}</Link>

          <span className="post-time">
            {moment(finalDate, "dddd, MMMM Do YYYY, HH:mm:ss").fromNow()}
          </span>
        </Stack>
      </Card.Header>
      <Card.Body>
        {postTitle ? <Card.Title> {postTitle} </Card.Title> : null}
        {postType === "text" ? (
          <Card.Text className="post-content">{postContent}</Card.Text>
        ) : null}
        {postType === "image" ? (
          <img alt="random" src="https://picsum.photos/400/320" />
        ) : null}
        {postType === "weather" ? (
          <Weather weatherContent={weatherContent} />
        ) : null}
        {postType === "zenquote" ? <ZenQuotes zenContent={zenContent} /> : null}
        {postType === "chuckquote" ? (
          <ChuckNorris chuckContent={chuckContent} />
        ) : null}
        {postType === "coin" ? <Coin coinContent={coinContent} /> : null}

        {/* <div className="time">
          <span className="span-time"> Posted at: {finalDate}</span>
        </div> */}
        <Stack>
          <hr />
          <CommentSection comments={comments} likes={likes} postID={postID} />
        </Stack>
      </Card.Body>
    </Card>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  postID: PropTypes.number.isRequired,
  postType: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  postTitle: PropTypes.string,
  comments: PropTypes.shape([]),
  likes: PropTypes.shape([]),
  createdAt: PropTypes.number.isRequired,
  weatherContent: PropTypes.shape({}),
  coinContent: PropTypes.shape([]),
  zenContent: PropTypes.shape({}),
  chuckContent: PropTypes.shape({}),
};

Post.defaultProps = {
  postTitle: "",
  comments: [],
  likes: [],
  weatherContent: {},
  coinContent: [],
  zenContent: {},
  chuckContent: {},
};

export default Post;
