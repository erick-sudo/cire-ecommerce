import './App.css';

import React, { Routes, Route } from 'react';

import Title from './components/Title';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/about" element={<Title />} />
        <Route path="/contact" element={<Title />} />
      </Routes>
    </div>
  );
}

export default App;
