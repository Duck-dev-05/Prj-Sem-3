import React from 'react';
import './App.css';
import Header from './Component/JS/Header';
import Navbar from './Component/JS/Navbar';
import AboutSection from './Component/JS/AoutSection';
import Features from './Component/JS/Features';
import CallToAction from './Component/JS/CalltoAction';
import Footer from './Component/JS/Footer';
import FreeRecipes from './Component/JS/FreeRecipe';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutSection />
      <FreeRecipes/>
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
