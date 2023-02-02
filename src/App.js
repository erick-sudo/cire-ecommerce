import './App.css';

import React, { useEffect, useState } from 'react';

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

  function addToCart(product) {
    setCart([ product, ...cart ])
  }

  useEffect(() => {
    fetch("http://localhost:8000/products?category=women's clothing")
    .then( res => res.json())
    .then( res => setCart(res))
  }, [])

  return (
    <div className="App">
    <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart products={cart} />} />
        <Route path="/viewproduct/:productId" element={<ViewProduct addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
