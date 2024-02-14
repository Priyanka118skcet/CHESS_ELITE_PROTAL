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
import "./UHeader.css";

const UHeader = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <>
      <div id="header2">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext2">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu2" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
  
              <MenuItem icon={<FiHome />}>
                <Link to="/Uprofile"><h4 className="xx">Profile</h4></Link>
              </MenuItem>

              <MenuItem icon={<FaList />}
              >
              <Link to="/Stude_Home"><h4 className="xx">Institutions</h4></Link>
            </MenuItem>
            
              
              <MenuItem icon={<BiCog />}>
                <Link to="/Stud_CCourse"><h4 className="xx">View Course</h4></Link>
              </MenuItem>

              <MenuItem icon={<BiCog />}>
                <Link to="/EnrollDisplay"><h4 className="xx">EnrollCourse</h4></Link>
              </MenuItem>
              
              <MenuItem icon={<BiCog />}>
                <Link to="/Chess"><h4 className="xx">Game</h4></Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
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

export default UHeader;
