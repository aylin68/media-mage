import React, { useState, useEffect } from "react";
import "./feed.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import Post from "../post/post";
import "bootstrap/dist/css/bootstrap.min.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6266bc5a4ba5823fb42d182e");
      console.log(res);
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="feedBody">
      <iframe
        width="600"
        height="338"
        src="https://www.youtube.com/embed/xMNhDf5-hvk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis
        iure quis vero alias reprehenderit deleniti corporis facere molestias
        adipisci quibusdam a est eligendi illo, minima eos, tempora provident
        voluptatibus? Officiis nobis quis dolore harum unde voluptas animi,
        itaque nihil obcaecati voluptatem veniam reprehenderit dolorum sit
        eveniet porro laudantium cupiditate at officia ratione illum! Id
        deleniti necessitatibus rem accusantium, natus obcaecati, voluptatibus
        iusto sed, pariatur dolor veritatis perferendis ab quae. Voluptatum
        voluptatem ipsum alias vero ab, mollitia eius obcaecati esse porro nam
        ducimus commodi ad velit corrupti recusandae temporibus, quas doloremque
        magni dolore! Excepturi necessitatibus eveniet expedita impedit in
        adipisci iusto sunt, aperiam quod minima possimus doloribus! Commodi
        debitis consequuntur dignissimos dolore maiores! Impedit amet veritatis
        magnam mollitia culpa, perferendis ducimus accusamus dolorum quas sit
        omnis assumenda, facilis eaque esse animi suscipit? Sed odio id unde
        nisi tempora mollitia ut odit, distinctio exercitationem velit nulla
        fugit sit repudiandae. Eaque atque quam a quis modi nihil doloribus
        magnam, rem, illum labore nesciunt maiores? Et, omnis expedita dolorem
        nostrum rerum accusantium quibusdam modi excepturi doloremque quos?
        Placeat omnis vel repellat optio dolorum quisquam accusantium
        perspiciatis blanditiis eligendi? Nam aliquam eos pariatur? Vitae culpa
        explicabo nihil praesentium cupiditate ullam id quod deserunt itaque?
      </p>
      <div className="feed">
        <div className="feedWrapper">{/* min 24:00 */}</div>
      </div>
    </div>
    <Container className="feedBody">
      <Post type="text" postID="1" length="3" />
      <Post type="image" postID="2" length="1" />
      <Post type="weather" postID="3" length="7" />
      <Post type="text" postID="4" length="6" />
      <Post type="text" postID="5" length="2" />
      <Post type="text" postID="6" length="9" />
      <Post type="text" postID="7" length="4" />
    </Container>
  );
}
export default Feed;
