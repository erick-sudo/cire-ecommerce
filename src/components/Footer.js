import React from "react";
import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { AiFillSlackCircle } from "react-icons/ai"

import logo2 from "../assets/logo3.png"

function Footer({brands, garments, b_and_c}) {

    return (
        <div className="footer">
            <div className="footer-content">
                <div className={ b_and_c ? `garments-wrapper` : `garments-wrapper` }>
                    <div className="titles-footer">Garments</div>
                    <div className="garments">
                        {
                            garments.map((garment, index) => {
                                return <span key={index} className={b_and_c ? `garment` : `garment placeholder-dark`}>{garment}</span>
                            })
                        }
                    </div>
                </div>
                <div className={b_and_c ? `brands-wrapper` : `brands-wrapper`}>
                    <div className="titles-footer">Brands</div>
                    <div className="brands">
                        {
                            brands.map((brand, index) => {
                                return <span key={index} className={b_and_c ? `brand` : `brand placeholder-dark`}>{brand}</span>
                            })
                        }
                    </div>
                </div>
                <div className="socialpages">
                    <span><BsFacebook /></span>
                    <span><FaInstagramSquare /></span>
                    <span><BsTwitter /></span>
                    <span><AiFillSlackCircle /></span>
                </div>
            </div>
            <h4>Copyright &copy; 2023</h4>
            <div className="logo-bottom">
                <div className='logo'>
                    <img src={logo2} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer;


//BsFacebook FaInstagramSquare BsTwitter AiFillSlackCircle
