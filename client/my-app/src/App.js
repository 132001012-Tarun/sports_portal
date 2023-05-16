import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/N/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/N/index.js';
import Cricket from './pages/cricket.js';
import FootBall from './pages/footBall.js';
import VolleyBall from './pages/volleyBall.js';
import TT from './pages/tt.js';
import BasketBall from './pages/basketBall.js';
import Badminton from './pages/badminton.js';
import { useAuth0 } from "@auth0/auth0-react";
  
function App() {
  return (
    <Router>
    < Navbar/> 
     <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/cricket' element={<Cricket/>} />
        <Route path='/footBall' element={<FootBall/>} />
        <Route path='/volleyBall' element={<VolleyBall/>} />
        <Route path='/tt' element={<TT/>} />
        <Route path='/basketBall' element={<BasketBall/>} />
        <Route path='/badminton' element={<Badminton/>} />
  </Routes>
    </Router>
  );
}

export default App;
