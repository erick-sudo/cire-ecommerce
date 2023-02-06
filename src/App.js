import './App.css';

import React, { useState } from 'react';

import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Products from './components/Products';
import ViewProduct from './components/ViewProduct';
import Cart from './components/Cart';

function App() {

  const [cart, setCart] = useState([])
  const [showFilterButton, setShowFilterButton] = useState(false)

  function addToCart(product) {
    const newCartItem = cart.find(item => item.id === product.id)
    if(newCartItem) {
      newCartItem.qty = newCartItem.qty+1
      setCart(cart.map(item => {
        if(item.id === newCartItem.id) {
          return newCartItem
        }
        return item
      }))
    } else {
      setCart([{...product, qty: 1}, ...cart])
    }
  }

  function changeQuantity(productId, incr) {
    const newCartItem = cart.find(item => item.id === productId)
    newCartItem.qty = incr ? newCartItem.qty + 1 : newCartItem.qty > 1 ? newCartItem.qty -1 : newCartItem.qty
    setCart(cart.map(item => {
      if(item.id === newCartItem.id) {
        return newCartItem
      }
      return item
    }))
  }

  function removeFromCart(product) {
    setCart(cart.filter(item => item.id !== product.id))
  }

  return (
    <div className="App">
    <Navbar cartCount={cart.length} showFilterButton={showFilterButton} setShowFilterButton={setShowFilterButton} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products showFilterButton={showFilterButton} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart products={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} />} />
        <Route path="/viewproduct/:productId" element={<ViewProduct addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
