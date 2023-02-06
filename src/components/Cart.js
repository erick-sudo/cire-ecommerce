import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import { MdOutlineAddCircle } from "react-icons/md"
import { HiMinusCircle } from "react-icons/hi"
import { TbSum } from "react-icons/tb"

function CartItem({product, changeQuantity, removeFromCart}) {

    return (
        <div className="cart-products">
            <Product container="cart" product={product} />
            <div className="middle-cart-details">
                <div className="product-cart-title">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                        <hr />
                        <div>
                            <span>Quantity : {product.qty} <span onClick={() => changeQuantity(product.id, true)} className="add-quantity-btn"><MdOutlineAddCircle /></span><span onClick={() => changeQuantity(product.id, false)} className="add-quantity-btn"><HiMinusCircle /></span></span>
                            <div className="total-price">
                                <span>Total</span>
                                <span className="total-value-per-product">$ {(product.price*product.qty).toFixed(4)}</span>
                        </div>
                    </div>
                </div>
            <span className="remove-from-cart" onClick={() => removeFromCart(product)}>Remove</span>
        </div>
    )
}

function Cart({products, changeQuantity, removeFromCart}) {

    const navigate = useNavigate()

    const TOTAL = products.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.qty;
    }, 0)

    return (
        <div className="cart">
        {
            products.map((product, index) => {
                return (
                    <CartItem key={index} product={product} changeQuantity={changeQuantity}removeFromCart={removeFromCart} />
                )
            })
        }
        <div className="sum-total">
            <div><TbSum /></div>
            <div>$ {TOTAL.toFixed(4)}</div>
        </div>
        <div className="checkout-btn-container">
            <button className="checkout-btn">CHECKOUT</button>
            <button onClick={() => navigate(-1)}  className="checkout-btn">Continue Shopping</button>
        </div>
        </div>
    )
}

export default Cart;
