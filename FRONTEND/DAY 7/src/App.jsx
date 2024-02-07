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
import Uprofile from "./pages/Uprofile";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import ECreate from "./EnrollCourse/ECreate";
import ERead from "./EnrollCourse/ERead";
import EUpdate from "./EnrollCourse/EUpdate";
import ShowRead from "./EnrollCourse/ShowRead";
import EnrollCourse from "./EnrollCourse/EnrollCourse";
import Aprofile from "./pages/Aprofile";
import AHome from "./components/Header/AHome";
import UHome from "./components/UHeader/UHome";
import SCreate from './components/Add_Student/Add_Stud';
import SEdit from './components/Add_Student/Edit_Student';
import SHome from'./components/Add_Student/Home_Stud';
import ICreate from './components/Admin_Ins/Add_Ins';
import IEdit from './components/Admin_Ins/Edit_Ins';
import IHome from './components/Admin_Ins/Home_Ins';
import CCreate from './components/Admin_Course/Add_Course';
import CEdit from './components/Admin_Course/Edit_Course';
import CHome from './components/Admin_Course/Home_Course';
import Slide from './components/Slide_Show/Slide_Show';
import Stude_Home from './components/Admin_Ins/Stude_Home';
import Chart from './components/Chart/Admin_Chart';
import Stud_CCourse from './components/Admin_Course/Stud_CCourse';
import Game from './components/Chess_Board/Chess';
import Reg from './EnrollCourse/EnrollCourseNoApi';
import TypeA1 from './components/Text/Type1'; 
import Type2 from './components/Text/Type2';
import AdminPro from './components/Admin_Profile/AdminProfile';
function App() {
  return (
    <Router>
    
    <Routes>
        <Route path="/" element={
        <>
        <TNavbar/>
        <Login />
        </>  
        } />
        <Route path="/Signup" element={
          <>
          <TNavbar/>
          <Signup />
          </>
          
        } />
        <Route path="/Header" element={<Header />} />
        <Route path="/UHeader" element={<UHeader />} />
        <Route path="/Leaderboard" element={
          <Board />
        } />
        <Route path="/ucreate" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/ECreate" element={<ECreate/>} />
        <Route path="/ERead" element={<ERead/>} />
        <Route path="/EUpdate/:id" element={<EUpdate/>} />
        <Route path="/showread" element={<ShowRead/>} />
        <Route path="/EnrollCourse" element={<EnrollCourse/>} />
        <Route path="/Type1" element={<TypeA1/>} />
        <Route path="/Type2" element={<Type2/>} />
        <Route path="/AdminPro" element={<AdminPro/>} />

        <Route path="/Chess" element={
          <>
          <Game/>
          <UHeader />
        </>
        } />

        <Route path="/Reg" element={
          <>
          <Reg/>
          <UHeader/>
          </>

        } />
        
        <Route path="/Uprofile" element={
          <>
          <AdminPro />
        
          </>
        } />

         <Route path="/Aprofile" element={
          <>
          <Aprofile/>
          <Header/>
          </>
        } />

         <Route path="/SCreate" element={
          <>
          <SCreate/>
          <Header/>
          </>
        } />
         <Route path="/SEdit/:id" element={
          <>
          <SEdit/>
          <Header/>
          </>
        } />
         <Route path="/SHome" element={
          <>
          <SHome/>
          <Header/>
          </>
        } />

         <Route path="/ICreate" element={
          <>
          <ICreate/>
          <Header/>
          </>
        } />

         <Route path="/IEdit" element={
          <>
          <IEdit/>
          <Header/>
          
          </>
        } />

         <Route path="/IHome" element={
          <>
          <IHome/>
          <Header/>
          </>
        } />

         <Route path="/CCreate" element={
          <>
          <CCreate/>
          <Header/>
          </>
        } />
         <Route path="/CEdit" element={
          <>
          <CEdit/>
          <Header />
          </>
        } />
         <Route path="/CHome" element={
          <>
          <CHome/>
          <Header />
          </>
        } />
         <Route path="/Slide" element={
          <>
          <Slide/>
          <UHeader />
          </>
        } />
         <Route path="/StudeIHome" element={
          <>
          <Stude_Home/>
          <UHeader />
          </>
        } />
         <Route path="/Chart" element={
          <>
          <Chart/>
          <Header />
          </>
        } />
         <Route path="/Stud_CCourse" element={
          <>
          <Stud_CCourse/>
          <UHeader/>
          </>
        } />
       
         <Route path="/UHome" element={
          <>
          <UHeader/>
          <UHome/>
          </>
        } />

         <Route path="/AHome" element={
          <>
          <AHome/>
          <Header/>
          </>
        } />
        
        </Routes>

    </Router>
  );
}


export default App;
