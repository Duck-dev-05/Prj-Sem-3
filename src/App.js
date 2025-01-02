import React from 'react';
import './App.css';
import Header from './Component/JS/Header';
import Navbar from './Component/JS/Navbar';
import AboutSection from './Component/JS/AboutSection';
import Features from './Component/JS/Features';
import CallToAction from './Component/JS/CalltoAction';
import Footer from './Component/JS/Footer';
import ContestDetails from './Component/JS/ContestDetails';
import ContestList from './Component/JS/ContestList';
import SubmissionForm from './Component/JS/SubmmitionForm';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutSection />
      <Features />
      <ContestDetails/>
      <ContestList/>
      <SubmissionForm/>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
