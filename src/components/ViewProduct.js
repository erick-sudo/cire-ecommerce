import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "./Product";
import {TiStarFullOutline, TiStarOutline} from "react-icons/ti"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import {MdShoppingBasket} from "react-icons/md"
import Thumb from "./Thumb";

function ViewProduct({addToCart}) {

    const navigate = useNavigate()

    const { productId } = useParams()

    const [product, setProduct] = useState({thumbnails: new Array(7).fill("Place")})
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
        })
    },[productId])

    return (
        <>
        {
            <div className={image ? `view-product-details` : `view-product-details placeholder-dark`}>
                <div className="product-details">
                    <div className="left">
                        <h3 className="titles">{product.title}</h3>
                        <div className="product-main">
                            <div className="main-poster placeholder-dark">
                            { image == null ?
                                <div className="placeholder-thumb">
                                    <MdShoppingBasket />
                                </div> :
                                <img className="product-thumbnails" src={image} alt={product.title} />
                            }
                            </div>
                            <div className="thumbnails">
                            {
                                product.thumbnails.map((thumbnail,index) => {
                                        return <Thumb title={product.title ? product.title : " "} url={thumbnail} key={index} />
                                })
                            }
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
                        </div>
                    </div>
                </div>
                <hr />
                <div className='list-wrapper'>
                    <div className='scroll-buttons-left'>
                        <FaAngleDoubleLeft />
                    </div>
                    <div className="related-products" >
                    {
                        related.map(product => <Product product={product} key={product.id} />)
                    }
                    </div>
                    <div className='scroll-buttons-right'>
                        <FaAngleDoubleRight />
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default ViewProduct;
