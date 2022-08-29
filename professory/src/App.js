import React from 'react'
import './App.css';

import { NavLink, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import LoginScreen from './component/screens/LoginScreen';
import HomeScreen from './component/screens/HomeScreen';
import Navbar from './component/Navbar';
import SignupScreen from './component/screens/SignupScreen';

function App() {
  return (
    <Router>
    <Navbar/>

      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/SignUp' element={<SignupScreen/>}/>
      </Routes>
  
    <Footer/>
</Router>
  );
}

export default App;
