import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Logstyles.css";
import image from '../../pictures/c53.jpg'; // Import your image file

const preventRefresh = (e) => {
  e.preventDefault();
};

export default function Login() {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="form-container">
        <div className="wrapper signIn">
          <div className="form">
            <div className="heading">LOGIN</div>
            <form>
              <div>
              <label htmlFor="login-email" className="label-color">E-Mail</label>
                <input type="email" id="login-email" placeholder="Enter your email" />
              </div>
              <br/>
              <div>
              <label htmlFor="login-password" className="label-color">Password</label>
                <input type="password" id="login-password" placeholder="Enter your password" />
              </div>
              <br />
              <button type="submit" onClick={preventRefresh} className='bi'>
                Submit
              </button>
            </form>
            <p>
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
