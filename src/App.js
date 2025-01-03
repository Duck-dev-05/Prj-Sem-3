import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from './Component/JS/Header';
import Navbar from './Component/JS/Navbar';
import AboutSection from "./Component/JS/AboutSection";
import Features from "./Component/JS/Features";
import CallToAction from "./Component/JS/CalltoAction";
import Footer from './Component/JS/Footer';
const App = () => {
  return (
   
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutSection />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;