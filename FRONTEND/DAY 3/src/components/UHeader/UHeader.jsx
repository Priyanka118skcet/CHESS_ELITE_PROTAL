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
  const [menuCollapse, setMenuCollapse] = useState(false);

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
              {/* Use Link component for navigation */}
              <MenuItem icon={<FiHome />}>
                <Link to="/Uprofile">Profile</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}>
                <Link to="/Ucreate">Add Admission</Link>
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>
                <Link to="/read">View Admission</Link>
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>
                <Link to="/update">Edit Admission</Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/showread">View Courses</Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/ERead">Enrolled Courses</Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/settings">View Status</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                <Link to="/">Logout</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default UHeader;
