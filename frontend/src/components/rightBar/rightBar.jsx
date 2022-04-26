import React from "react";
import "./rightBar.css";

function RightBar() {
  return (
    <div className="rightBarBody">
      <img
        src="https://images.unsplash.com/photo-1522159698025-071104a1ddbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
      />
      <ul className="FriendList">
        <li className="friend">
          <img
            src="https://miro.medium.com/max/3150/1*uBXhnqpOdr4iL062Bk1IzA.jpeg"
            alt="andrei"
          />
        </li>
      </ul>
    </div>
  );
}

export default RightBar;
