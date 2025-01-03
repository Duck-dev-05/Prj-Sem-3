// App.js
import React, { useState } from "react";
import "../CSS/Login";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(isLogin ? "Login" : "Register", "Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn">
          {isLogin ? "Login" : "Register"}
        </button>
        {isLogin && (
          <div className="social-login">
            <p>Or login with</p>
            <div className="social-buttons">
              <button type="button" className="social-btn facebook">
                <FaFacebook /> Facebook
              </button>
              <button type="button" className="social-btn google">
                <FaGoogle /> Google
              </button>
              <button type="button" className="social-btn twitter">
                <FaTwitter /> Twitter
              </button>
            </div>
          </div>
        )}
        <p className="toggle-form">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default App;
