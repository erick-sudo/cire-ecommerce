import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "./Product";
import {TiStarFullOutline, TiStarOutline} from "react-icons/ti"

function ViewProduct({addToCart}) {

    const navigate = useNavigate()

    const { productId } = useParams()

    const [product, setProduct] = useState({})
    const [related, setRelated] = useState([])

    useEffect(() => {
        fetch(`https://transactions-bank-of-flatiron.herokuapp.com/products/${productId}`)
        .then(response => response.json())
        .then(data =>  {
            setProduct(data)
            fetch(`https://transactions-bank-of-flatiron.herokuapp.com/products?category=${data.category}`)
            .then(response => response.json())
            .then(data => setRelated(data))
        })
    },[productId])


    return (
        <>
        { Boolean(Object.keys(product).length) ?
            <div className="view-product-details">
                <div className="product-details">
                    <div className="left">
                        <h3 className="titles">{product.title}</h3>
                        <div className="product-main">
                            <div className="main-poster">
                            <img src={product.image} alt={product.title} />
                            </div>
                            <div className="thumbnails">
                            {
                                product.thumbnails.map((thumbnail,index) => {
                                        return <img className="thumbs" src={thumbnail} alt={product.title} key={index} />
                                })
                            }
                        </div>
                        <p className="product-description">{product.description}</p>
                        </div>
                    </div>
                    <div className="right">
                    <div className="other">
                            <b>Rating</b>
                            <h4>{Boolean(product.rating) ? product.rating.rate : null}</h4>
                            <div>{Boolean(product.rating) > 0 ? [0,1,2,3,4,5,6,7,8,9].map((star, index) => {
                                if(index > product.rating.rate) {
                                    return <TiStarOutline key={index} />
                                } else {
                                    return <TiStarFullOutline key={index} />
                                }
                            }) : null}</div>
                            <h4>{Boolean(product.rating) ? product.rating.count : null}<br />Pieces Available</h4>
                            <button className="add-to-cart" onClick={() => {
                                addToCart(product)
                                navigate("/cart")
                            } }>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <hr />
                <div className="related-products" >
                    {
                        related.map(product => <Product product={product} key={product.id} />)
                    }
                </div>
            </div>
        : null
        }
        </>
    )
}

export default ViewProduct;
