import React, { useState } from 'react';

const WhatsappComm = ({ message }) => {

    const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className='container mt-40'>
<div className='order-count-container'>
  <div className='item-counts'>
    <div className='count-img'>
      <img src="https://app.shiprocket.in/app/img/dashboard-whatsapp/order_total.svg" />
    </div>
    <div className='count-content'>
      <h3>0</h3>
      <div className="tooltip-row">
      <p>Total Orders</p>
      <span 
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <i className="info-icon">i</i> {/* 'i' icon */}
      {isVisible && <div className="tooltip-content">{message} hello</div>}
    </span>
    </div>
    </div>
  </div>
  <div className='item-counts'>
  <div className='count-img'>
      <img src="https://app.shiprocket.in/app/img/dashboard-whatsapp/whatsapp.svg" />
    </div>
    <div className='count-content'>
      <h3>0</h3>
      <div className="tooltip-row">
      <p>Total Message Sent</p>
    </div>
    </div>
  </div>
  <div className='item-counts'>
  <div className='count-img'>
      <img src="https://app.shiprocket.in/app/img/dashboard-whatsapp/blue_tick.png" />
    </div>
    <div className='count-content'>
      <h3>0</h3>
      <div className="tooltip-row">
      <p>Message read rate</p>
    </div>
    </div>
  </div>
  <div className='item-counts'>
  <div className='count-img'>
      <img src="https://app.shiprocket.in/app/img/dashboard-whatsapp/query_resolved.svg" />
    </div>
    <div className='count-content'>
      <h3>0</h3>
      <div className="tooltip-row">
      <p>Queries resolved </p>
      <span 
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <i className="info-icon">i</i> {/* 'i' icon */}
      {isVisible && <div className="tooltip-content">{message} hello</div>}
    </span>
    </div>
    </div>
  </div>
</div>
      </div>
      <div className='whatsappcom-staus-view-section mt-2'>
        <div  className='whatsappcom-staus-view-item mt-3'>
          <h3>Top 5 most viewed status</h3>
          <hr></hr>
         <div className='staus-view-item-inside-content'>
<p>No Data Available</p>
<img src="https://app.shiprocket.in/app/img/trackingpage/noData.png" />
         </div>
        </div>
        <div  className='whatsappcom-staus-view-item mt-3'>
          <h3>Messages sent over time</h3>
          <hr></hr>
         <div className='staus-view-item-inside-content'>
<p>No Data Available</p>
<img src="https://app.shiprocket.in/app/img/trackingpage/noData.png" />
         </div>
        </div>
      </div>
      <h6  className='mt-5 p-3'><b>Note:</b> Last updated on <b>29 Sep 2024.</b> There might be a slight mismatch in the data.</h6>
    </>
  )
}

export default WhatsappComm
