import React from 'react';
import SidebarDashboard from '../components/SidebarDashboard';

const Plan = () => {
  return (
    <>
     <div className='main-dashboard-page-content'>
    <div className='sidebarspace'>
    <SidebarDashboard />
    </div>
    <div className='pagecontentspace'>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Home</a>
    <div class="d-flex ms-auto align-items-center">
      <span class="me-3"><b>Balance:</b> $100</span>
      <button class="btn btn-primary me-3" type="button">Quick Action</button>

    
      <form class="d-flex" role="search">
        <button class="btn btn-light" type="submit">AWB</button>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </div>
</nav>

<div className='plan-topbar text-center'>
    <p>Your Plan is about to expire.</p>
</div>
   <div className='container plan-heading-section text-center mt-5 mb-3'>
<h3>Our Prices</h3>
<p>Grow Faster with the shipping plan, that fit your business.</p>
   </div>
   <div className='container plan-interval-row mb-2'>
<span>Monthly</span><span>Quatarly</span><span>Half Yearly</span><span>Yearly</span>
   </div>
   <div className='container plan-card-section mb-5'>
    <div className='plan-box'>
        <div className='plan-box-item text-center mt-2'>
            <div className='top-section-plan'>
            <h5>Select Plan</h5>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder</p> 
            </div>
            <div className='plan-bottom-section'>
        <hr />
        <span>Shipping Rates</span><hr/>
        <span>Minimum Signup Period</span><hr/>
        <span>Courier Partner</span><hr />
        </div>
        </div>
        <div className='plan-box-item text-center mt-2'>
        <div className='top-section-plan'>
            <h5>Lite</h5>
            <p>In publishing and graphic design, Lorem ipsum</p>
            <button type="button" class="btn btn-primary">Activate</button>
            </div>
        <div className='plan-bottom-section'>
        <hr />
        <span>Shipping Rates</span><hr/>
        <span>Minimum Signup Period</span><hr/>
        <span>Courier Partner</span><hr />
        </div>
        </div>
        <div className='plan-box-item text-center mt-2'>
        <div className='top-section-plan'>
            <h5>Basic</h5>
            <p>In publishing and graphic design, Lorem ipsum</p>
            <button type="button" class="btn btn-primary">Activate</button>
            </div>
        <div className='plan-bottom-section'>
        <hr />
        <span>Shipping Rates</span><hr/>
        <span>Minimum Signup Period</span><hr/>
        <span>Courier Partner</span><hr />
        </div>
        </div>
        <div className='plan-box-item text-center mt-2'>
        <div className='top-section-plan'>
            <h5>Advance</h5>
            <p>In publishing and graphic design, Lorem ipsum</p>
            <button type="button" class="btn btn-primary">Activate</button>
            </div>
        <div className='plan-bottom-section'>
        <hr />
        <span>Shipping Rates</span><hr/>
        <span>Minimum Signup Period</span><hr/>
        <span>Courier Partner</span><hr />
        </div>
        </div>
        <div className='plan-box-item text-center mt-2'>
        <div className='top-section-plan'>
            <h5>Enterprise++</h5>
            <p>In publishing and graphic design, Lorem ipsum</p>
            <button type="button" class="btn btn-primary">Activate</button>
            </div>
        <div className='plan-bottom-section'>
        <hr />
        <span>Shipping Rates</span><hr/>
        <span>Minimum Signup Period</span><hr/>
        <span>Courier Partner</span><hr />
        </div>
        </div>
    </div>
   </div>
</div>
    </div> 
    </>
  )
}

export default Plan
