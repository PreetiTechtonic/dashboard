import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
       <Navbar />
    <div className="container banner-section p-10"> 
<div className='content-section'>
<img src='https://one.delhivery.com/assets/create_banner.5fcb51b0.png'/>
</div>
<div className='form-section'>
<h3 className='text-center'>Create Your Account</h3>
<form>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Your Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter full name" />
  </div>
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div>
<label for="exampleFormControlInput1" className="form-label">Phone Number</label></div>
<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">+91</span>
  <input type="text" className="form-control" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Password</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="input-group mt-3  mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
  </div>
  <span>By clicking on Create Account, you agree to<br /> Delhivery's Terms & Conditions and Privacy Policy</span>
</div>
<button type="button" className="btn btn-dark mt-4">Create Account</button>
</form>
<div className='not-looking-section text-center mt-3'>
    <span>Not looking for eCommerce shipping? Checkout</span>
    <div className='not-looking-points'>
<div className='nt-points'><span><a href='#'>B2B Cargo</a></span></div>
<div className='nt-points'><span><a href='#'>
Franchise</a></span></div>
<div className='nt-points'><span><a href='#'>Jobs</a></span></div>
<div className='nt-points'><span><a href='#'>Personal Courie</a>r</span></div>
    </div>
</div>
<div className='login-link text-center mt-3 mb-3'>
<span>Already have an account? <Link to='/Login'>Login</Link></span>
</div>
</div>
    </div>

    <div className='container client-slider-section'>
        <div className='client-slide-heading text-center'>
<h4>Serving <b>corporates, SME</b> retail clients across industries</h4>
        </div>
    <div className="slider mb-5">
  <div className="slide-track">
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
    <div className="slide">
      <img src="https://one.delhivery.com/assets/carrier.5c6d5070.svg" alt="" />
    </div>
  </div>
</div>
    </div>

    <div className='container features-section'>
  
<div class="flex-container">
  <div className='feature1'>1</div>
  <div className='feature2'>2</div>
  <div className='feature3'>3</div>
</div>
    </div>

    <div className='start-shipping-button-section text-center mt-5 mb-5'>
    <button type="button" class="btn btn-dark">Start Shipping in Minutes</button>
    </div>

    <div className='service-integration-section mt-5 mb-5'>
    <div className='row mb-5'>
        <div className='col-md-3 col-sm-6 mt-2'>
        <div class="card">
  <img src="https://one.delhivery.com/assets/shopify.368649dd.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">Reach 99.5% of Indian population across 18,500 pin codes</p>
  </div>
</div>
        </div>
        <div className='col-md-3 col-sm-6 mt-2'>
        <div class="card">
  <img src="https://one.delhivery.com/assets/shopify.368649dd.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">One-click integration for syncing Shopify and WooCommerce orders</p>
  </div>
</div> 
        </div>
        <div className='col-md-3 col-sm-6 mt-2'>
        <div class="card">
  <img src="https://one.delhivery.com/assets/shopify.368649dd.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">Send shipping and NDR updates to your customers via WhatsApp</p>
  </div>
</div>
        </div>
        <div className='col-md-3 col-sm-6 mt-2'>
        <div class="card">
  <img src="https://one.delhivery.com/assets/shopify.368649dd.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">Send shipments globally to 220+ countries with FedEx</p>
  </div>
</div>
        </div>
    </div>
    </div>

    <div className='container dashboard-overview-video-section mt-5 mb-5'>
        <h1>See it in Action, all in <span className='text-danger'>ONE</span> dashboard</h1>
        <div className='imgslider mt-5 mb-5'></div>
    </div>

    <div className='container rate-calculator-section mt-5 mb-5'>
<div className='rate-calculator-content text-center'>
    <h2 className='mb-3'>Confused about costs?</h2>
    <h1 className='mb-3'>Rate Calculator</h1>
    <p>Tell us about your package and destination and get estimates on how much it’ll cost you to ship with us</p>
    <button type="button" class="btn btn-dark mt-5">Get Estimate</button>
</div>

    </div>
    <Footer />
    </> 
  )
}
