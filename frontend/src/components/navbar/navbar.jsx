import React from "react";
import "./navbar.css";
//🍔 Menu
let burgerIsToggled = false;
const navLinks = document.getElementsByClassName("navLinks");
const burgerToggle = () => {
  burgerIsToggled = !burgerIsToggled;
  burgerIsToggled
    ? (navLinks[0].style.display = "none")
    : (navLinks[0].style.display = "flex");
};



const Navbar = () => {
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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">APIs</a>
          </li>
          <li>
            <a href="">Profile</a>
          </li>
        </ul>
      </div>
      <div className="burgerMenu" onClick={burgerToggle}>
        <div className="burgerBtn"></div>
        <div className="burgerBtn"></div>
      </div>
    </div>
  );
};

export default Navbar;
