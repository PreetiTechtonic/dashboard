import React from 'react'

const DashboardHome = () => {
  return (
    <>
    <div className='container mt-80'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12 colxs-12'>
                <div className='welcome-note-section'>
                    <div className='welcome-note-content'>
<h3>Hi Amandeep! welcome to Delhivery</h3>
<p>Activate your account to ship your orders. This will take less than a minute</p>
<button type="button" class="btn btn-light">Activate your business account</button>
                    </div>
                    <div className='action-required-section mt-3'>
                    <div class="alert d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
   Action Required
  </div>
</div>
<div className='action-required-keyword'>
    <div className='keyword-item'>
        <p><b>High Risk Orders</b></p>
        <p>0</p>
        <p>Activate Now</p>
    </div>
    <div className='keyword-item'>
        <p><b>High Risk Orders</b></p>
        <p>0</p>
        <p>Activate Now</p>
    </div>
    <div className='keyword-item'>
        <p><b>High Risk Orders</b></p>
        <p>0</p>
        <p>Activate Now</p>
    </div>
    <div className='keyword-item'>
        <p><b>High Risk Orders</b></p>
        <p>0</p>
        <p>Activate Now</p>
    </div>
</div>
                    </div>
                    <div className='dashboard-progess mt-3'>
                        <div className='performance-select'>
                            <div className='performance-item'><p>
                            Your Performance</p></div>
                            <div className='performance-item'>
                            <select class="form-select form-select-sm" aria-label="Small select example">
   <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                            </div>
                        </div>
                        <div className='dash-progess-bar'>
                            <p>On-Time Delivery Attempt</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success">25%</div>
</div>
<span>Average time for first attempt <b>3</b></span>

<p>On-Time Delivery Attempt</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success">25%</div>
</div>
<span>Average time for first attempt <b>3</b></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 colxs-12'>
            <div class="card dashboard-whats-new-section">
  <div class="card-header">
    Whats New  </div>
  <ul class="list-group list-group-flush whats-new-features">
    <li class="list-group-item">Save More with RTO Prediction</li>
    <li class="list-group-item">Save More with RTO Prediction</li>
    <li class="list-group-item">Save More with RTO Prediction</li>
    <li class="list-group-item">Save More with RTO Prediction</li>
    <li class="list-group-item">Save More with RTO Prediction</li>
  </ul>
</div>
<div className='doc-cal-section'>
<div className='doc-cal-item'></div>
<div className='doc-cal-item'></div>
</div>
            </div>
        </div>
</div>
    </>
  )
}

export default DashboardHome
