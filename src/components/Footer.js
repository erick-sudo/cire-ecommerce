import React from "react";
import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { AiFillSlackCircle } from "react-icons/ai"

function Footer({brands, garments}) {

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="garments-wrapper">
                    <div className="titles-footer">Garments</div>
                    <div className="garments">
                        {
                            garments.map((garment, index) => {
                                return <span key={index} className="garment">{garment}</span>
                            })
                        }
                    </div>
                </div>
                <div className="brands-wrapper">
                    <div className="titles-footer">Brands</div>
                    <div className="brands">
                        {
                            brands.map((brand, index) => {
                                return <span key={index} className="brand">{brand}</span>
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
        </div>
    )
}

export default Footer;


//BsFacebook FaInstagramSquare BsTwitter AiFillSlackCircle
