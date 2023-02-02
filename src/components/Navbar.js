import React from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti"


function Navbar({cartCount}) {
    return (
    <div className="top-bar">
      <div className="navbar">
          <NavLink to="/home" >Home</NavLink>
          <NavLink to="/products" >Products</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/contact" >Contact</NavLink>
      </div>
      <div className="cart-btn">
        <NavLink to="/cart" ><span className="cart-size">{cartCount}</span><TiShoppingCart /></NavLink>
      </div>
    </div>
  )
}

export default Navbar;