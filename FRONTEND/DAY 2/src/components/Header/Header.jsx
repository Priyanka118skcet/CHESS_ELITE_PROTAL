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
  const [menuCollapse, setMenuCollapse] = useState(false);

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
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}>
                <Link to="/category">Category</Link>
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>
                <Link to="/favourite">Favourite</Link>
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>
                <Link to="/author">Author</Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/settings">Settings</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                <Link to="/logout">Logout</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
