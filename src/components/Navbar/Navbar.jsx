import React, { useState } from "react";
import {NavbarLink} from "../NavbarLink/NavbarLink";
import { routes } from "../../pages/index";
import "./Navbar.css";

export const Navbar = () => {
  
  return (
    <div id="navbar">
      <NavbarLink className = "home" label="Home" to={routes.home} />
      <NavbarLink className = "favorites" label ="Favorites" to={routes.favorites}/>
    </div>
  );
};
