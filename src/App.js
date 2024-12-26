import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/Login';
import FreeRecipes from './page/FreeRecipes';
import Contests from './page/Contest';
import Announcements from './page/Announcements';
import Feedback from './page/Feedback';
import FAQs from './page/FAQs';
import Footer from './Component/Footer';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<FreeRecipes />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer/>
    </Router>

  );
};







export default App;