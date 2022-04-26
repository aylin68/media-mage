import React from "react";
/* import { Link } from "react-router-dom"; */
//import "../App.css";

function Registration() {
  return (
    <form className="form-login">
      <div className="login">
        <h3>Create a new Account</h3>
        <div className="form-style">
          <div className="login-style">
            <input
              type="text"
              className="form-control"
              placeholder="user name"
            />
          </div>
          <div className="login-style">
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
        </div>

        <div className="login-style">
          <button type="button" className="btn btn-lg btn-success btn-block">
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
export default Registration;
