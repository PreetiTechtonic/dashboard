import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHome from '../Admin/DashboardHome';

const SidebarDashboard = () => {
  return (
    <>
  <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <Link to="/Dashboard/DashboardHome">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                          Dashboard
                        </span>
                    </Link>
                  
                </li>
                <li class="has-subnav">
                    <Link to='/Dashboard/Plan'>
                        <i class="fa fa-globe fa-2x"></i>
                        <span class="nav-text">
                            Plan
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-globe fa-2x"></i>
                        <span class="nav-text">
                            Order & Pickup
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                           Exceptions & NDR
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <Link to="/Dashboard/Transaction">
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                        Domestic Wallet
                        </span>
                    </Link>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-film fa-2x"></i>
                        <span class="nav-text">
                            Surveying Tutorials
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-book fa-2x"></i>
                        <span class="nav-text">
                          Support
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                        Weight Mismatch
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Reports
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Services
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <Link to="/">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </Link>
                </li>  
            </ul>
        </nav> 
    </>
  )
}

export default SidebarDashboard;
