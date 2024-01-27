import React from 'react';

function LoginForm() {
 const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.1)',
    width: '300px',
    margin: '0 auto',
    marginTop: '100px',
    background: 'linear-gradient(45deg, #f5f7fa, #c3cfe2)'
 };

 const labelStyles = {
    display: 'block',
    marginBottom: '10px',
    color: '#444'
 };

 const inputStyles = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '20px',
    color: '#444',
    backgroundColor: '#fff'
 };

 const buttonStyles = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    background: 'linear-gradient(45deg, #4caf50, #45a049)',
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
 };

 const buttonStylesHover = {
    ...buttonStyles,
    transform: 'scale(1.05)',
    boxShadow: '0px 5px 15px rgba(0,0,0,0.3)'
 };

 const linkStyles = {
    textDecoration: 'none',
    color: '#4CAF50',
    marginTop: '10px',
    fontWeight: 'bold'
 };

 return (
    <div style={formStyles}>
      <h1 style={{ marginBottom: '20px', color: '#444' }}>Login</h1>
      <div style={labelStyles}>
        <label htmlFor="username">Username</label>
      </div>
      <input type="text" id="username" style={inputStyles} placeholder="Enter username" />
      <div style={labelStyles}>
        <label htmlFor="password">Password</label>
      </div>
      <input type="password" id="password" style={inputStyles} placeholder="Enter password" />
      <button type="submit" style={buttonStylesHover}>Login</button>
      <div style={labelStyles}>
        <p style={{ marginBottom: '0', color: '#444' }}>Don't have an account? <a href="#" style={linkStyles}>Signup</a></p>
      </div>
      <div style={labelStyles}>
        <p style={{ marginBottom: '0', color: '#444' }}>Forgot Password? <a href="#" style={linkStyles}>Reset</a></p>
      </div>
    </div>
 );
}

export default LoginForm;