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
import Board from "./components/Leaderboard/board";
import MediaCard from "./components/UCourse/Courses";
import Uprofile from "./pages/Uprofile";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/User/UserDashboard";
function App() {
  return (
    <Router>
    <TNavbar/>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/UHeader" element={<UHeader />} />
        <Route path="/Leaderboard" element={<Board />} />
        <Route path="/MediaCard" element={<MediaCard />} />
         <Route path="/Uprofile" element={<Uprofile />} />
         <Route path="/ucreate" element={<Create />} />
         <Route path="/read" element={<Read />} />
         <Route path="/update" element={<Update />} />
         <Route path="/admin" element={<AdminDashboard />} />
         <Route path="/user" element={<UserDashboard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
