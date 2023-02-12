import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti"
import { ImFilter } from "react-icons/im"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { MdAccountCircle } from "react-icons/md"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import { TbWritingSign } from "react-icons/tb"
import { ImProfile } from "react-icons/im"


function Navbar({cartCount, showFilterButton, setShowFilterButton}) {

  const navigate = useNavigate()

  const [accShow, setAccShow] = useState(false)

  function handleAccountAccess(action) {
    setAccShow(!accShow)

    switch(action) {
      case "login":
        navigate("/login")
        break
      case "signup":
        navigate("/signup")
        break
      case "logout":
        break
      case "profile":
        navigate("/profile")
        break
      default:

    }
  }

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
      <div className="account-access-div">
          <div className="account-button" onClick={() => {
            setAccShow(!accShow)
          }}><MdAccountCircle /></div>
          <div className="account-options" style={{"display":`${accShow ? "flex" : "none"}`}}>
            <span onClick={() => handleAccountAccess("login")}><FiLogIn />Login</span>
            <span onClick={() => handleAccountAccess("signup")}><TbWritingSign />Signup</span>
            <span onClick={() => handleAccountAccess("logout")}><FiLogOut />Logout</span>
            <span onClick={() => handleAccountAccess("profile")}><ImProfile />Profile</span>
          </div>
      </div>
      <div className="cart-btn">
        <NavLink to="/cart" ><span className="cart-size">{cartCount}</span><TiShoppingCart /></NavLink>
      </div>
    </div>
  )
}

export default Navbar;
