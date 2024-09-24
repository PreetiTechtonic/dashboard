import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
     <div className='login-page'>
        <div class="login-content-section">
            <img src="https://one.delhivery.com/assets/footer_logo.b918ca36.svg" />
            <div className='mt-5'>
            <p><b>Sign up in under 5 minutes & access all of Delhivery Services</b></p>
            <ul>
                <li>Ship to 99.5% of India’s population</li>
                <li>Assured COD remittance in 2 days at zero extra charges</li>
                <li>Ship Internationally to 220+ countries</li>
                <li>Assured COD remittance in 2 days at zero extra charges</li>
                <li>Assured COD remittance in 2 days at zero extra charges</li>
            </ul>
            </div>
            <p><b>India’s eCommerce runs on Delhivery. Trusted by the thousands of businesses</b></p>
            <div className='customer-logo'>
<span className='logo-container'><img src="https://one.delhivery.com/assets/amazone.0395a7ee.svg" /></span>
<span className='logo-container'><img src="https://one.delhivery.com/assets/amazone.0395a7ee.svg" /></span>
<span className='logo-container'><img src="https://one.delhivery.com/assets/amazone.0395a7ee.svg" /></span>
<span className='logo-container'><img src="https://one.delhivery.com/assets/amazone.0395a7ee.svg" /></span>
<span className='logo-container'><img src="https://one.delhivery.com/assets/amazone.0395a7ee.svg" /></span>
            </div>
        </div>
        <div className='login-form-section'>
        <form>
        <h2 className='text-center mb-3'>Login to your account</h2>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter full name" />
  </div>
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1" />
</div>
<button type="button" class="btn btn-dark">Login</button>
</form>
<div className='login-trouble-content'>
<p className='text-center'>Don’t have an account? <Link to="/">Create an Account</Link></p>
<p className='text-center'>Having trouble logging in? <a href="">Raise an Issue</a></p>
</div>
        </div>
        </div> 
    </>
  )
}

export default Login
