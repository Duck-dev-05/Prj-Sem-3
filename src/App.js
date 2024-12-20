import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Home from './page/Home';
import Recipes from './page/Recipes';
import Contest from './page/Contest';
import FAQs from "./page/FAQs";

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Recipes/>}/>
                <Route path="/" element={<Contest/>}/>
                <Route path="/" element={<FAQs/>}/>
            </Routes>
        </Router>
    );
};

export default App;