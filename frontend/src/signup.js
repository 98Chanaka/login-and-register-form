import React from 'react'
import { Link } from 'react-router-dom'


function signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
        <form action="">
            <div>
                <label htmlfor="name"> name</label>
                <input type="text" placeholder='Enter Name' className='form-control rounded .0'/>
            </div>
            <div>
                <label htmlfor="Email"> Email</label>
                <input type="text" placeholder='Enter Email' className='form-control rounded .0'/>
            </div>
            <div>
                <label htmlfor="password"> Password</label>
                <input type="password" placeholder='Enter Password' className='form-control rounded .0'/>
            </div>
            <button className='btn btn-success w-100' rounded="0">Sign Up</button>
            <p>You are agree to aour terms and privacy policy</p>
            <Link to ='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration'>Login</Link>
           
        </form>
       
    </div>
</div>
  )
}

export default signup
