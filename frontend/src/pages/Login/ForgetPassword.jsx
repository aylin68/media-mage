import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function ForgetPassword() {
  return (
    <form className="form-login">
      <div className="login">
        <h3>Find Your Account</h3>
        <div className="form-style">
          <h6>
            Please enter your email or mobile number to search for your account.
          </h6>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Email"
          />
        </div>
        <div className="button-style">
          <Link to="/">
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
export default ForgetPassword;
