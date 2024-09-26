import React from 'react'
import SidebarDashboard from '../components/SidebarDashboard';
import Transaction from '../Admin/Transaction';
import Plan from '../Admin/Plan';
import DashboardHome from './Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return (  
    <div className='dashboard-flex flex'>
      {/* Sidebar */}
      <SidebarDashboard />
      <Routes>
        <Route path="/Transaction" element={<Transaction/>}/> 
        <Route path="/Plan" element={<Plan/>}/>
        <Route path="/Dashboard/*" element={<DashboardContent/>}/> 
        {/* <Route path="map" element={<MAp/>}/>
        <Route path="details" element={<Details/>}/>*/}
        <Route path="/DashboardHome" element={<DashboardHome/>}/> 
      </Routes>
    </div>
  )
}

export default Dashboard
