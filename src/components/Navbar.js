import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  color: "blue",
  textDecoration: "none",
  padding: "10px",
  fontWeight: "bolder",
  fontSize: "1.2em"
}


function Navbar() {
    return (
    <div className="navbar">
        <NavLink to="/home" style={linkStyles} >Home</NavLink>
        <NavLink to="/products" style={linkStyles} >Products</NavLink>
        <NavLink to="/about" style={linkStyles} >About</NavLink>
        <NavLink to="/contact" style={linkStyles} >Contact</NavLink>
    </div>
  )
}

export default Navbar;