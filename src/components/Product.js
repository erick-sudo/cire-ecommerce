import React from "react";

function Product({product}) {
    return (
        <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => {
            }}></button>
        </div>
    )
}

export default Product;