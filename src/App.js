import './App.css';

import React from 'react';

import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Products from './components/Products';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/viewproduct/:productId" element={<ViewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
