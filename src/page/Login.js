import React, { useState } from "react";
import '../css/Login.css';

function LoginForm(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email",email);
        console.log("Password",password);
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required/>

                <label htmlFor="password">Password:</label>
                <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
                placeholder="Enter your password"
                required/>

                <button type="sumbit">Login</button>
            </form>
            <p>Don't have an account? <a href="/">Register here</a></p>
        </div>
    );
}

export default LoginForm;