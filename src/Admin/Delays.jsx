import React from 'react'

const Delays = () => {
  return (
    <>
     <div className='container mt-40'>
      <div className='delays-section mt-5'>
<div className='delays-section-items'>
  <div className='delays-section-sub-items'>
  <div class="ndb_bx">
    <h6>Misrouted Shipments</h6>
    <p class="ng-binding">0</p>
    </div>
  </div>
  <div className='delays-section-sub-items'>
  <div class="ndb_bx">
    <h6>ODA Shipments</h6>
    <p class="ng-binding">0</p>
    </div>
  </div>
  <div className='delays-section-sub-items'>
  <div class="ndb_bx">
    <h6>Lost Shipments</h6>
    <p class="ng-binding">0</p>
    </div>
  </div>
  <div className='delays-section-sub-items'>
  <div class="ndb_bx">
    <h6>Damaged Shipments</h6>
    <p class="ng-binding">0</p>
    </div>
  </div>
  <div className='delays-section-sub-items'>
  <div class="ndb_bx">
    <h6>Destroyed Shipments</h6>
    <p class="ng-binding">0</p>
    </div>
  </div>
</div>
      </div>

      <div className='delay-second-row mt-3'>
        <div className='row'>
          <div className='col-md-5 col-xs-12 mt-2 delay-row-item'>
            <h6>Pickup Pendency</h6>
            <hr />
            <div className='delay-row-subitem'>
              <img src="https://app.shiprocket.in/app/img/icons/no-shipment.png" />
              <span>No Delays</span>
            </div>
          </div>
          <div className='col-md-5 col-xs-12 mt-2 delay-row-item'>
          <h6>NDR to Reattempt Delays</h6>
          <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">1 Day Delayed</th>
      <th scope="col">2 Day Delayed</th>
      <th scope="col">3 Day Delayed</th>
      <th scope="col">3+ Day Delayed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">First NDR Attempt</th>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">Second NDR Attempt
      </th>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">Third NDR Attempt</th>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Delays
