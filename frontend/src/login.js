import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
    const[values, setValues] = useState({
        email: '',
        password: ''
    })
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign In</h2>
        <form action="">
          <div>
            <label htmlFor="email"> Email</label>
            <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
          </div>
          <div>
            <label htmlFor="password"> Password</label>
            <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
          </div>
          <button className='btn btn-success w-100 rounded-0'>Log in</button>
          <p>You are agreeing to our terms and privacy policy</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;