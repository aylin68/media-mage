import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const email = useRef(); // we can use useState, but it will re render at every input, we want to avoid this
  const password = useRef();
  const { isFetching, error, dispatch } = useContext(AuthContext); // to use the value in AuthContext for loginCall

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  // console.log(user);
  return (
    <form className="form-login" onSubmit={handleClick}>
      <div className="login">
        <h3>Log in to App</h3>
        <div className="login-style">
          {/* I changed username with email and added required*/}
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            ref={email}
          />
        </div>
        <div className="login-style">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            minLength="6"
            ref={password}
          />
        </div>

        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          disabled={isFetching}
        >
          {isFetching ? "Loading" : "Log in"}
        </button>
        <Link to="/ForgetPassword">
          <div className="login-style">
            <span>
              <a href="/ForgetPassword">Forgot password?</a>
            </span>
          </div>
        </Link>

        <Link to="/register">
          <div className="login-style">
            <button type="button" className="btn btn-lg btn-success btn-block">
              Create a New Account
            </button>
          </div>
        </Link>
      </div>
    </form>
  );
}
export default Login;
