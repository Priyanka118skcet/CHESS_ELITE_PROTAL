import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Logstyles.css";
import image from '../../pictures/c53.jpg'; // Import your image file

export default function Signup() {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="form-container">
        <div className="wrapper signIn">
          <div className="form">
            <div className="heading1">CREATE AN ACCOUNT</div>
            <form>
              <div>
              <label htmlFor="login-email" className="label-color">Name</label>
                <input type="text" id="signup-name" placeholder="Enter your name" />
              </div>
              < br/>
              <div>
              <label htmlFor="login-email" className="label-color">E-Mail</label>
                <input type="text" id="signup-email" placeholder="Enter your mail" />
              </div>
              <br/>
              <div>
              <label htmlFor="login-email" className="label-color">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  placeholder="Enter your password"
                />
              </div>
              <br/>
              <button type="submit" className="bi">Submit</button>
              <h3 align="center" className="or">
                OR
              </h3>
            </form>
            <p>
              Have an account ? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
