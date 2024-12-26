// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './components/SignIn';
import AboutUs from './components/AboutUs';   
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import './styles/App.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs />
      <ContactUs />
    </div>
  );
};


export default App;
