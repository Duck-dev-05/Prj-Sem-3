import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Recipes</Link></li>
                <li><Link to="/">Contest</Link></li>
                <li><Link to="/">FAQs</Link></li>
            </ul>
        </nav>
    );
};

export default Header;