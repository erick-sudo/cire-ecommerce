import React from "react";
import Product from "./Product";

function Cart({products}) {

    return (
        <div className="cart">
        {
            products.map((product, index) => {
                return (
                    <div  key={index} className="cart-products">
                        <Product container="cart" product={product} />
                        <div className="middle-cart-details">
                            <div className="product-cart-title">{product.title}</div>
                            <div className="product-price">${product.price}</div>
                        </div>
                        <button className="remove-from-cart">Remove From Cart</button>
                    </div>
                )
            })
        }
        <div className="checkout-btn-container">
            <button className="checkout-btn">CHECKOUT</button>
            <button className="checkout-btn">Continue Shopping</button>
        </div>
        </div>
    )
}

export default Cart;