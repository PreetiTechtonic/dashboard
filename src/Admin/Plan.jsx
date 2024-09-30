import React, { useState } from 'react';
import SidebarDashboard from '../components/SidebarDashboard';
import planSeparator from './images/plan-seperator.png';
import tickImage from './images/tick.png';

const Plan = () => {
  const [activeSection, setActiveSection] = useState('quarterly');
  const handleSectionClick = (section) => {
    setActiveSection(section); // Set the active section on click
  };
  const listItems = [
    'Upto 10 SKU / Hyperlocal Darkstore',
    'Minimum Guarantee: 200 Orders/Month',
    'Subscription for 3 Months',
    'Per Order Cost: ₹ 55',
    'Stock holding, processing & Management',
    'Access to Dashboard',
    'Monthly Reports',
    'Key Account Management'
  ];
 
  
  
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
   <ul className="interval-list">
          <li className="interval-item">
            <button onClick={() => handleSectionClick('quarterly')} className="interval-link">Quarterly</button>
          </li>
          <li className="interval-item">
            <button onClick={() => handleSectionClick('halfyearly')} className="interval-link">Half Yearly</button>
          </li>
          <li className="interval-item">
            <button onClick={() => handleSectionClick('yearly')} className="interval-link">Yearly</button>
          </li>
        </ul>
   </div>
   {/* <div className='container plan-card-section mb-5'>
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
   </div> */}
   <div className='container mb-5'>
   {activeSection === 'quarterly' && (
  <div className='plans-container' id="quatarly-section">
    <div className='plan-items'>
<div className='plan-item1'>
  <div className='plan-header-item text-center'>
    <h1 className='text-white'>Starter</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>44,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn1">Get this plan</button>
</div>
<div className='plan-items'>
<div className='plan-item2'>
<div className='plan-header-item text-center'>
    <h1 className='text-white'>Growth</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>1,29,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn2">Get this plan</button>
</div>
<div className='plan-items'>
<div className='plan-item3'>
<div className='plan-header-item text-center'>
    <h1 className='text-white'>Enterprise</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>2,09,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn3">Get this plan</button>
</div>
  </div>
   )}
     {activeSection === 'halfyearly' && (
  <div className='plans-container' id="Halfyearly-section">
    <div className='plan-items'>
<div className='plan-item1'>
  <div className='plan-header-item text-center'>
    <h1 className='text-white'>Starter</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>44,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn1">Get this plan</button>
</div>
<div className='plan-items'>
<div className='plan-item2'>
<div className='plan-header-item text-center'>
    <h1 className='text-white'>Growth</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>1,18,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn2">Get this plan</button>
</div>
<div className='plan-items'>
<div className='plan-item3'>
<div className='plan-header-item text-center'>
    <h1 className='text-white'>Enterprise</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>1,90,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn3">Get this plan</button>
</div>
  </div>
   )}
   {activeSection === 'yearly' && (
  <div className='plans-container' id="yearly-section">
    <div className='plan-items'>
<div className='plan-item1'>
  <div className='plan-header-item text-center'>
    <h1 className='text-white'>Starter</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>36,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn1">Get this plan</button>
</div>
<div className='plan-items'>
<div className='plan-item2'>
<div className='plan-header-item text-center'>
    <h1 className='text-white'>Growth</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>1,06,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn2">Get this plan</button>
</div>
<div className='plan-items'>
<div className='plan-item3'>
<div className='plan-header-item text-center'>
    <h1 className='text-white'>Enterprise</h1>
    <p>Pack</p>
    <img src={planSeparator} alt="Plan Separator" />
   <h2 className='text-white'><span>&#8377;</span>1,71,000/<span>Month</span></h2>
  </div>
  <div className='plan-sub-item'>
  <ul className="tick-list">
        {listItems.map((item, index) => (
          <li key={index} className="tick-list-item">
            <img src={tickImage} alt="Tick" className="tick-icon" />
            <span className="list-content">{item}</span>
          </li>
        ))}
      </ul>
  </div>
</div>
<button type="button" class="btn plan-choose-btn3">Get this plan</button>
</div>
  </div>
     )}
</div>
</div>

    </div> 
    </>
  )
}

export default Plan
