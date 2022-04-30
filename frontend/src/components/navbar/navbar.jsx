import { React } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

// 🍔 Menu
let burgerIsToggled = false;
const navLinks = document.getElementsByClassName("navLinks");
const burgerToggle = () => {
  burgerIsToggled = !burgerIsToggled;
  if (burgerIsToggled) {
    navLinks[0].style.display = "flex";
  } else {
    navLinks[0].style.display = "none";
  }
};

function Navbar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_469566.png"
          alt="logo"
          href="#"
        />
        <h1>mediamage</h1>
      </div>
      <div className="searchContainer">
        <input type="text" className="searchBar" />
        <input type="button" value="search" className="searchBtn" />
      </div>
      <div className="navLinks">
        <ul className="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/apis">APIs</Link>
          </li>
          <li>
            <Link to="/profile/:id">Profile</Link>
          </li>
        </ul>
      </div>
      <div
        className="burgerMenu"
        onClick={burgerToggle}
        onKeyDown={burgerToggle}
        role="button"
        tabIndex={0}
      >
        <div className="burgerBtn" />
        <div className="burgerBtn" />
      </div>
    </div>
  );
}

export default Navbar;
