import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import FAQ from './components/FAQ';
import Announcements from './components/Announcements';
import FreeRecipes from './components/FreeRecipes';
import './App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/freerecipes" element={<FreeRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;