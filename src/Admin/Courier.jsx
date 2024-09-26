import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Courier = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const applyFilter = () => {
    if (startDate && endDate) {
      console.log("Filter applied from:", startDate, "to:", endDate);
      // Here you can add your logic to filter the table data based on the selected date range
    } else {
      alert("Please select both start and end dates.");
    }
  };

  return (
    <>
    <div className='container mt-40'>
    <div className="date-range-filter m-l-10">
      <div>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Select Start Date"
          dateFormat="yyyy-MM-dd"
          className="date-picker-input"
        />
      </div>
      <div>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="Select End Date"
          dateFormat="yyyy-MM-dd"
          className="date-picker-input"
        />
      </div>
      <div>
        <button onClick={applyFilter} className="apply-filter-btn">Apply Filter</button>
      </div>
    </div>
      <div className='courier-section mt-5'>
        <div className='couriers-items'>
          <div className='couriers-items-row-1'>
          <div className='courier-logo-header'></div>
          <ul className="list-group list-courier-main mt-2">
  <li className="list-group-item mb-2 br-10 bg">Courier</li>
  <li className="list-group-item mb-2 br-10 bg">Mode</li>
</ul>
<ul className="list-group">
  <li className="list-group-item bg p3">Shipment Count</li>
  <li className="list-group-item bg p3">COD Orders</li>
  <li className="list-group-item bg p3 mb-2">Prepaid Orders</li>
  <li className="list-group-item bg p3">Delivered</li>
  <li className="list-group-item bg p3">1st Attempt Delivery</li>
  <li className="list-group-item bg p3 mb-2">NDR Delivered</li>
  <li className="list-group-item bg p3">NDR Raised</li>
  <li className="list-group-item bg p3">RTO</li>
  <li className="list-group-item bg p3 mb-2">Lost/Damaged</li>
</ul>
<h5 className="p-2">Pickup Performance</h5>
<ul className="list-group">
  <li className="list-group-item bg p3">Shipment Count</li>
  <li className="list-group-item bg p3">COD Orders</li>
  <li className="list-group-item bg p3 mb-2">Prepaid Orders</li>
</ul>
          </div>
          <div className='courier-items-row-2'>
          <div className='couriers-items1'>
            <div className='courier-logo-header'>
          <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<div className='courier-logo'>
<img src="https://app.shiprocket.in/app/img/couriers/Shipping_AmazonShippingLogo.png" width="150px;" height="80px;"/>
</div>
</div>
<ul className="list-group mt-2">
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
</ul>
<ul className="list-group mt-55">
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
</ul>
          </div>
          <div className='couriers-items2'>
            <div className='courier-logo-header'>
          <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<div className='courier-logo'>
<img src="https://app.shiprocket.in/app/img/couriers/ekart.png"  width="80px;" height="80px;" />
</div>
</div>
<ul className="list-group mt-2">
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
</ul>
<ul className="list-group mt-55">
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
</ul>
          </div>
          <div className='couriers-items3'>
            <div className='courier-logo-header'>
          <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<div className='courier-logo'>
<img src="https://app.shiprocket.in/app/img/couriers/ekart.png"  width="80px;" height="80px;"/>
</div>
</div>
<ul className="list-group mt-2">
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
</ul>
<ul className="list-group mt-55">
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
  <li className="list-group-item mb-2 br-10">-</li>
</ul>
          </div>
          </div>
        </div>
        <div className='courier-update-note p-3'>
          <p><b>Note:</b> Last updated on <b>25 Sep 2024.</b> There might be a slight mismatch in the data.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Courier
