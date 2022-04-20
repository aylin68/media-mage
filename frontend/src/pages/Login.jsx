import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
//import "../components/navbar/navbar.css"

const Login = () => {
  return (
    <>
      <form className="form-login">
        <div className="login">
          <h3>Log in to App</h3>
          <div className="login-style">
            <input
              type="text"
              className="form-control"
              placeholder="user name"
            ></input>
          </div>
          <div className="login-style">
            <input
              type="password"
              className="form-control"
              placeholder="password"
            ></input>
          </div>

          <button type="button" className="btn btn-lg btn-primary btn-block">
            Login
          </button>
          <Link to="/ForgetPassword">
            <div className="login-style">
              <span>
                <a href="#">Forgot password?</a>
              </span>
            </div>
          </Link>

          <Link to="/registration">
            <div className="login-style">
              <button
                type="button"
                className="btn btn-lg btn-success btn-block"
              >
                Create new Account
              </button>
            </div>
          </Link>
        </div>
      </form>
    </>
  );
};
export default Login;
