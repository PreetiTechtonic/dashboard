import React from 'react'
import { Link } from 'react-router-dom';

const DashboardcontentHeader = () => {
  return (
    <>
    <h4 className='p-3'>Dashboard</h4>
      <ul class="das-content-header nav nav-underline">
  <li class="nav-item">
   <Link class="nav-link active" aria-current="page" to='Overview'>Overview</Link> 
  </li>
  <li class="nav-item">
   <Link class="nav-link" to='Orders'>Orders</Link> 
  </li>
  <li class="nav-item">
   <Link class="nav-link" to='Courier'>Courier</Link> 
  </li>
  <li class="nav-item">
   <Link class="nav-link" to='WhatsappComm'>Whatsapp Comm</Link> 
  </li>
  <li class="nav-item">
   <Link class="nav-link" to='RTO'>RTO</Link> 
  </li>
  <li class="nav-item">
   <Link class="nav-link" to='Delays'>Delays</Link> 
  </li>
</ul>
    </>
  )
}

export default DashboardcontentHeader
