import React from "react";
import Product from "./Product";

function Cart({products}) {
    

    return (
        <div className="cart">
        {
            products.map((product) => {
                return (
                    <Product key={product.id} />
                )
            })
        }
        </div>
    )
}

export default Cart;