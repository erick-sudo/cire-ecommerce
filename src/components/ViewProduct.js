import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "./Product";
import {TiStarFullOutline, TiStarOutline} from "react-icons/ti"
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPaypal } from 'react-icons/fa'
import {MdShoppingBasket} from "react-icons/md"
import Thumb from "./Thumb"

import visa from "../assets/payment_modes/visa.svg"
import shopify from "../assets/payment_modes/shopify.svg"
import skrill from "../assets/payment_modes/skrill.svg"
import western_union from "../assets/payment_modes/western_union.svg"
import electron_visa from "../assets/payment_modes/electron_visa.svg"
import mpesa from "../assets/payment_modes/mpesa.png"
import paypal from "../assets/payment_modes/paypal.png"

const payment_modes = [paypal, visa, mpesa, shopify, skrill, western_union, electron_visa ]

function ViewProduct({addToCart}) {

    const navigate = useNavigate()

    const contRef = useRef()

    const thumbsRef = useRef()

    const { productId } = useParams()

    const [product, setProduct] = useState({thumbnails: new Array(5).fill(null)})
    const [related, setRelated] = useState(new Array(20).fill("FILL"))

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8001/products?id=${productId}`)
        .then(response => response.json())
        .then(data =>  {
            setProduct(data)
            fetch(`http://localhost:8001/products?category=${data.category}`)
            .then(response => response.json())
            .then(data => setRelated(data))

            fetch(`http://localhost:8001/product_images${data.image}`)
            .then(response => response.blob())
            .then(imageBlob => {
                const imageUrl = URL.createObjectURL(imageBlob)
                setImage(imageUrl)
            })
        })
    },[productId])

    function handleScroll(pixels, thumbsReference) {

        if(Boolean(thumbsReference)) {
            thumbsReference.current.scrollBy({
                top: 0,
                left: pixels,
                behavior: 'smooth'
            })
        } else {
            contRef.current.scrollBy({
                top: 0,
                left: pixels,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
        {
            <div className={image ? `view-product-details` : `view-product-details placeholder-dark`}>
                <div className="product-details">
                    <div className="left">
                        <h3 className="titles">{product ? product.title : ""}</h3>
                        <div className="product-main">
                            <div className={image ? "main-poster" : "main-poster placeholder-dark"}>
                            { image == null ?
                                <div className="placeholder-thumb">
                                    <MdShoppingBasket />
                                </div> :
                                <img className="product-thumbnails" src={image} alt="Product Poster" />
                            }
                            </div>
                            <div className='list-wrapper'>
                                <div className='scroll-buttons-left' onClick={() => handleScroll(-110, thumbsRef)}>
                                    <FaAngleDoubleLeft />
                                </div>
                                <div className="thumbnails" ref={thumbsRef}>
                                {
                                    product.thumbnails.map((thumbnail,index) => {
                                        return <Thumb title={product.title ? product.title : " "} url={thumbnail} key={index} />
                                    })
                                }
                            <div className='scroll-buttons-right' onClick={() => handleScroll(110, thumbsRef)}>
                                <FaAngleDoubleRight />
                            </div>
                        </div>
                        </div>
                        <p className="product-description">{product.description}</p>
                        </div>
                    </div>
                    <div className={image ? `right` : `right placeholder-dark`}>
                        <div className={image ? `other` : `other placeholder-dark`}>
                                <b>Rating</b>
                                <h4>{Boolean(product.rating) ? product.rating.rate : ' '}</h4>
                                <div>{[0,1,2,3,4,5,6,7,8,9].map((star, index) => {
                                    if(index > (product.rating ? product.rating.rate : 5)) {
                                        return <TiStarOutline key={index} />
                                    } else {
                                        return <TiStarFullOutline key={index} />
                                    }
                                })
                                }</div>
                                <h4>{Boolean(product.rating) ? product.rating.count :  0}<br />Pieces Available</h4>
                                <button className="add-to-cart" onClick={() => {
                                    addToCart(product)
                                    navigate("/cart")
                                } }>Add to Cart</button>
                                <button className="buy-now" onClick={() => {
                                    addToCart(product)
                                    navigate("/cart")
                                } }>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="payment-modes">
                    {
                        payment_modes.map((mode, index) => {
                            return (
                                <div className="payment-mode" key={index}>
                                    <img src={mode} alt="Pay" />
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
                <div className='list-wrapper'>
                    <div className='scroll-buttons-left' onClick={() => handleScroll(-110)}>
                        <FaAngleDoubleLeft />
                    </div>
                    <div className="related-products" ref={contRef} >
                    {
                        related.map((product, index) => <Product product={product} key={index} />)
                    }
                    </div>
                    <div className='scroll-buttons-right' onClick={() => handleScroll(110)}>
                        <FaAngleDoubleRight />
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default ViewProduct;
