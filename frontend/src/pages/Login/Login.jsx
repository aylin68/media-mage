import React, { useRef, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const email = useRef(); // we can use useState, but it will re render at every input, we want to avoid this
  const password = useRef();
  const { dispatch } = useContext(AuthContext); // to use the value in AuthContext for loginCall

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  // console.log(user);
  <h3>Log in to App</h3>;
  return (
    <form className="form-login" onSubmit={handleClick}>
      <div className="login">
        <h3>
          Log in to <strong>mediamage</strong>
        </h3>
        <div className="login-style">
          {/* I changed username with email and added required */}
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
          // disabled={isFetching}
        >
          Log In
          {/* {isFetching ? "Loading" : "Log in"} */}
        </button>
        <LinkContainer to="/ForgetPassword">
          <div className="login-style">
            <span>
              <a href="/ForgetPassword">Forgot password?</a>
            </span>
          </div>
        </LinkContainer>

        <LinkContainer to="/register">
          <div className="login-style">
            <button type="button" className="btn btn-lg btn-success btn-block">
              Create a New Account
            </button>
          </div>
        </LinkContainer>
      </div>
    </form>
  );
}
export default Login;
