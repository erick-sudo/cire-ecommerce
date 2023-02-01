import React from "react";
import { useNavigate } from "react-router-dom";

function Product({product}) {

    const navigate = useNavigate();

    return (
        <div className="product" key={product.id} onClick={() => {
            navigate(`/viewproduct/${product.id}`);
        }}>
            <div className="product-thumb">
                <img className="product-thumbnails" src={product.image} alt={product.title} />
            </div>
            <div>
                <div className="product-title">{product.title}</div>
                <div className="product-price">${product.price}</div>
            </div>
        </div>
    )
}

export default Product;