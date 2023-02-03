import React from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti"
import { ImFilter } from "react-icons/im"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"


function Navbar({cartCount, showFilterButton, setShowFilterButton}) {
    return (
    <div className="top-bar">
      <div className="menu" onClick={() => {
        setShowFilterButton(!showFilterButton)
      }}>{ showFilterButton ? <BsFillArrowLeftCircleFill /> : <ImFilter />}</div>
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