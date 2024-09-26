import React from 'react'
import DashboardcontentHeader from './DashboardcontentHeader';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Overview from './Overview';
import Orders from './Orders';
import Rto from './Rto';
import Courier from './Courier';
import WhatsappComm from './WhatsappComm';
import Delays from './Delays';

const DashboardContent = () => {
  return (
    <>
    <div className='dashboardcontent'>
    <DashboardcontentHeader />
<hr/>
       <Routes>
       <Route path="Overview" element={<Overview/>}/>
       <Route path="Orders" element={<Orders/>}/>
       <Route path="Rto" element={<Rto />} />
       <Route path="Courier" element={<Courier />} />
       <Route path="WhatsappComm" element={<WhatsappComm />} />
       <Route path="Delays" element={<Delays />} />
      </Routes>
      </div>
    </>
  )
}

export default DashboardContent
