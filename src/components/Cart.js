import React from "react";
import Product from "./Product";
import { MdOutlineAddCircle } from "react-icons/md"
import { TbSum } from "react-icons/tb"

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
                            <hr />
                            <div>
                                <span>Quantity : {1} <span className="add-quantity-btn"><MdOutlineAddCircle /></span></span>
                                <div className="total-price">
                                    <span>Total</span>
                                    <span className="total-value-per-product">$495879</span>
                                </div>
                            </div>
                        </div>
                        <span className="remove-from-cart">Remove</span>
                    </div>
                )
            })
        }
        <div className="sum-total">
            <div><TbSum /></div>
            <div>$ 84569</div>
        </div>
        <div className="checkout-btn-container">
            <button className="checkout-btn">CHECKOUT</button>
            <button className="checkout-btn">Continue Shopping</button>
        </div>
        </div>
    )
}

export default Cart;