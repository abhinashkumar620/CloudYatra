import React from 'react';
import './Registed.css'

const Registed = () => {
  return (
   <>

  <div className="register-container">
      <form className="register-form">
        <h2>Register</h2>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Username</label>
        <input type="text" placeholder="Enter your username" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <button type="submit">Register</button>
      </form>
    </div>



   </>
  )
}

export default Registed
