import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
    (
    <div className="navbar">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
    </div>
  )
}

export default Navbar;