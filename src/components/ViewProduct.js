import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "./Product";

function ViewProduct() {

    const navigate = useNavigate()

    const { productId } = useParams()

    const [product, setProduct] = useState({})
    const [related, setRelated] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/products/${productId}`)
        .then(response => response.json())
        .then(data =>  {
            setProduct(data)
            fetch(`http://localhost:8000/products?category=${data.category}`)
            .then(response => response.json())
            .then(data => setRelated(data))
        })
    },[productId])


    return (
        <div className="view-product-details">
            <div className="product-details">
                <h3>{product.title}</h3>
                <div className="product-main">
                    <img src={product.image} alt={product.title} />
                    <p className="product-description">{product.description}</p>
                </div>
            </div>
            <div className="related-products" >
                {
                    related.map(product => <Product product={product} key={product.id} />)
                }
            </div>
        </div>
    );
}

export default ViewProduct;