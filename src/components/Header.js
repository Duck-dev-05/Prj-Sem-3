import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1>My Homepage</h1>
            <nav>
                <Link to ="#">Home</Link>
                <Link to= "#">About Us</Link>
                <Link to = "#">Contact Us</Link>
                <Link to = "#">Sign In</Link>
            </nav>
        </header>
    );
};

export default Header;