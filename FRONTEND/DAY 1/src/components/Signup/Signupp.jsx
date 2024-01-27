// Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Logstyles.css";

export default function Signup() {
  return (
    <div className="wrapper signUp" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="signup-name">Name</label>
            <input type="text" id="signup-name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="signup-email">E-Mail</label>
            <input type="text" id="signup-email" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" className="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/"> Login </Link>
        </p>
      </div>
    </div>
  );
}
