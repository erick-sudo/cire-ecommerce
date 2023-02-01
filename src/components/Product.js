import React from "react";

function Product({product}) {
    return (
        <div className="product" key={product.id}>
            <img className="product-thumbnails" src={product.images[0]} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default Product;