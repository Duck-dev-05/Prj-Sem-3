import React from 'react';
import '../css/LoginRegister.css';

function LoginRegister() {
    return (
        <div className='login/register'>
            <h2>Login/Register</h2>
            <form>
                <label>Email:</label>
                <input type='email' placeholder='Enter your email' required />
                <label>Password:</label>
                <input type='password' placeholder='Enter your password' required/>
                <button type='sumbit'>Login</button>
            </form>
            <div className='register'>
                <p>Not a member?Register now:</p>
                <button>Monthly Subscription - $10</button>
                <button>Yearly Subscription - $100</button>
            </div>
        </div>
    );
}

export default LoginRegister;