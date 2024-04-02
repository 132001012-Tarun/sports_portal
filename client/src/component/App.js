
import '../App.css';
import React,{useState} from 'react'
import Login from "./Login&Signup/login.jsx";
import Signup from "./Login&Signup/signUp.jsx";
import Home from "./Navbar/home.js";
import Navbar from './Navbar/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cricket from './Navbar/pages/cricket.js';
import FootBall from './Navbar/pages/footBall.js';
import VolleyBall from './Navbar/pages/volleyBall.js';
import TT from './Navbar/pages/tt.js';
import BasketBall from './Navbar/pages/basketBall.js';
import Badminton from './Navbar/pages/badminton.js';
import {Navigate} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setLoggedInState = (value) => {
    setIsLoggedIn(value);
  };

  return (
  <Router>
    <div>
      {isLoggedIn && <Navbar />}
    </div>
    <Routes>
      {!isLoggedIn ? (
        <>
          <Route path='/' element={<Login setLoggedIn={setLoggedInState} />} />
          <Route path='/signUp' element={<Signup />} />
        </>
      ) : (
        <>
          <Route path='/' element={<Navigate to='/home' />} />  
          <Route path='/home' element={<Home />} />
          <Route path='/cricket' element={<Cricket />} />
          <Route path='/footBall' element={<FootBall />} />
          <Route path='/volleyBall' element={<VolleyBall />} />
          <Route path='/tt' element={<TT />} />
          <Route path='/basketBall' element={<BasketBall />} />
          <Route path='/badminton' element={<Badminton />} />
        </>
      )}
    </Routes>
  </Router>
  );
}

export default App;
