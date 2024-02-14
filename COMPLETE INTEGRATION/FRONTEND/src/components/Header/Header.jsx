// Import necessary modules and components
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FiHome,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiLogOut,
} from "react-icons/fi";
import { FaList, FaRegHeart } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <>
    <div id="header1">
  
    <ProSidebar collapsed={menuCollapse}>
    <SidebarHeader>
            <div className="logotext1">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu1" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {/* Use Link component for navigation */}
              <MenuItem icon={<FiHome />}>
                <Link to="/Aprofile"><h4 className="xx">Profile</h4></Link>
              </MenuItem>
              <MenuItem icon={<FaList />}>
                <Link to="/CCreate"><h4 className="xx">Add Course</h4></Link>
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>
                <Link to="/CHome"><h4 className="xx">View Course</h4></Link>
              </MenuItem>
              {/* Student Operations */}
              <MenuItem icon={<BiCog />}>
                <Link to="/SCreate"><h4 className="xx">Add Student</h4></Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/SHome"><h4 className="xx">View Student</h4></Link>
              </MenuItem>
              {/* Institutions Operations */}
              <MenuItem icon={<BiCog />}>
                <Link to="/ICreate"><h4 className="xx">Add Institute</h4></Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/IHome"><h4 className="xx">View Institute</h4></Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              {/* Logout */}
              <MenuItem icon={<FiLogOut />}>
                <Link to="/"><h4 className="xx">Logout</h4></Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
          </ProSidebar>
          </div>
    
    </>
  );
};
export default Header;
