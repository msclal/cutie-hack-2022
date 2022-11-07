import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import ShopComponent from "../ShopComponent";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../Images/RParts.png")}
            alt="logo"
            style={{ width: "120px" }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/ShopComponent" activeStyle>
            Shop Now
          </NavLink>
          <NavLink to="/services" activeStyle>
            Classes
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
