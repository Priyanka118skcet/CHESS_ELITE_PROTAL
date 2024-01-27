// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TNavbar from "./components/TNavbar";
import Header from "./components/Header/Header";
import UHeader from "./components/UHeader/UHeader";
import LoginForm from "./components/Login";
import Signup from "./components/Signup/Signupp";  // Assuming you have a Signup component
import Login from "./components/Signup/Loginn";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <Router>
    <TNavbar/>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/UHeader" element={<UHeader />} />
      </Routes>
    </Router>
  );
}

export default App;
