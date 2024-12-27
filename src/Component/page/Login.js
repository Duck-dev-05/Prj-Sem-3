import React from "react";
import '../css/Login.css';

const LoginPage = () => {
    const handleLogin = (platform) =>{
        alert(`Logging in with $(platform)`);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login Page</h2>
                <form className="login-form">
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <button type="sumbit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="social-login">
                    <p>Or login with:</p>
                    <div className="social-buttons">
                        <button className="social-button google" onClick={() => handleLogin("Google")}>Google</button>
                        <button className="social-button facebook" onClick={() => handleLogin("Facebook")}>Facebook</button>
                        <button className="social-button twitter" onClick={() =>handleLogin("Twitter")}>Twitter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;