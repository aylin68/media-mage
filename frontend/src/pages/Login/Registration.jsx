import axios from "@services/axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// adding email and passwordAgain formù
axios.defaults.baseURL = "http://localhost:3002/api";
function Registration() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.error("you have an error:", error);
      }
    }
  };
  return (
    <form className="form-login" onSubmit={handleClick}>
      <div className="login">
        <h3>Create a new Account</h3>
        <div className="form-style">
          <div className="login-style">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              ref={username}
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref={password}
              required
              minLength="6"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password Again"
              ref={passwordAgain}
              required
            />
          </div>
        </div>

        <div className="login-style">
          <button type="submit" className="btn btn-lg btn-success btn-block">
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
export default Registration;
