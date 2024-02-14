import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Logstyles.css';
import image from '../../pictures/c53.jpg';
import i2 from '../../pictures/b1.jpg';
import i3 from '../../pictures/b2.jpg';
import { Link, useNavigate } from "react-router-dom";

const OceanLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/login', loginData);
      localStorage.setItem('token', response.data.token); // Store token in local storage
     console.log(response.data.token);

      if(email === 'admin@gmail.com')
      {
        navigate('/Chart');
      }
      else
      {
        navigate('/Slide');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
    <div className='occ'>
      <div className="oce-base-container">
      <img src={i3} alt="Login" className="oce" style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '8px', display: 'block', margin: '0 auto 20px' }} />

        <form className="ocean-login-form" onSubmit={handleSubmit}>
        
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
        <p className="ocean-login-link1">Don't have an account? <Link to="/Signup">Register here</Link></p> {/* Link remains unchanged */}
      </div>
      </div>
    </>
  );
};

export default OceanLogin;
