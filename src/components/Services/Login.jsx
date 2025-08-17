import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <>
     <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>

        <p className="register-link">
          Don't have an account? <Link to={'/Registed'}>Register</Link>
        </p>
      </form>
    </div>
   </>
  )
}

export default Login
