import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Homepage from "./page/Home";
import Login from "./page/Login";
import FreeRecipes from "./page/FreeRecipes";
import Contests from "./page/Contest";
import Announcements from "./page/Announcements";
import Feedback from "./page/Feedback";
import FAQ from "./page/FAQs";

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                
                <Navbar/>
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/free-recipes" element={<FreeRecipes />} />
                <Route path="/contests" element={<Contests />} />
               <Route path="/announcements" element={<Announcements />} />
               <Route path="/feedback" element={<Feedback />} />
               <Route path="/faq" element={<FAQ />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;