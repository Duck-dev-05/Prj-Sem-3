import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/free-recipes" element={<FreeRecipes />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
};

const Home = () => <div>Home Page</div>;
const Login = () => <div>Login Page</div>;
const SignUp = () => <div>Sign Up Page</div>;
const FreeRecipes = () => <div>Free Recipes Page</div>;
const Contests = () => <div>Contests Page</div>;
const Announcements = () => <div>Announcements Page</div>;
const Feedback = () => <div>Feedback Page</div>;
const FAQs = () => <div>FAQs Page</div>;

export default App;
