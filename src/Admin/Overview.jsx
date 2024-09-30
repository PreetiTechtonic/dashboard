import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);
const Overview = () => {
  useEffect(() => {
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];

    // Function to create charts for specific canvases
    const createChart = (canvasId) => {
      const ctx = document.getElementById(canvasId);

      // Check if chart already exists and destroy it if needed
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      // Create the chart
      ctx.chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
            title: {
              display: true,
              text: "Couriers Split"
            }
          }
        }
      });
    };

    // Create charts for each canvas
    createChart('myChart1');
    createChart('myChart2');
    createChart('myChart3');

    // Cleanup on unmount
    
  }, []); // Empty dependency array ensures this runs only once


  return (
    <>
      <div className='container ml-10'>
      <div className='overview-flex mt-3'>
<div className='overview-items1'>
  <div className='overview-items-img mb-3'>
  <img src="https://app.shiprocket.in/app/img/icons/dashboard/order-dash.svg" />
  </div>
<p>Today's Orders</p>
<p><b>0</b></p>
<p>Yesterday 3</p>
</div>
<div className='overview-items2'>
<div className='overview-items-img mb-3'>
  <img src="https://app.shiprocket.in/app/img/icons/dashboard/order-dash.svg" />
  </div>
<p>Today's Revenue</p>
<p><b>&#8377;0</b></p>
<p>Yesterday &#8377;1302</p>
</div>
<div className='overview-item3'>
<div className='overview-items-img mb-3'>
  <img src="https://app.shiprocket.in/app/img/icons/dashboard/order-dash.svg" />
  </div>
<p>Average Shipping</p>
<p><b>&#8377; 141</b></p>
</div>
     </div>
     <div className='overview-ship-detail mt-3'>
  <div className='shipping-head'>
    <div className='shipping-head-item mt-3'>
      <h6>Shipments Details</h6>
    </div>
    <div className='shipping-head-item mt-3'>
      <span>Last 30 Days</span>
    </div>
  </div>
<div className='overview-ship-dtails-blocks'>
  <div className='overview-ship-dtails-blocks-items'>
    <h6>121</h6>
    <p>Total Shipment</p>
  </div>
  <div className='overview-ship-dtails-blocks-items'>
    <h6>121</h6>
    <p>Pickup Pending</p>
  </div>
  <div className='overview-ship-dtails-blocks-items'>
    <h6>121</h6>
    <p>In-Transit</p>
  </div>
  <div className='overview-ship-dtails-blocks-items'>
    <h6>121</h6>
    <p>Delivered</p>
  </div>
  <div className='overview-ship-dtails-blocks-items'>
    <h6>121</h6>
    <p>NDR Pending</p>
  </div>
  <div className='overview-ship-dtails-blocks-items'>
    <h6>121</h6>
    <p>RTO</p>
  </div>
</div>
    </div>
    <div className='highchart-overview'>
      <div className='hightchart-item mb-5'>
        <canvas id="myChart1" style={{ width: '100%', maxWidth: '600px' }}></canvas>
        </div>
        <div className='hightchart-item mb-5'>
        <canvas id="myChart2" style={{ width: '100%', maxWidth: '600px' }}></canvas>
        </div>
        <div className='hightchart-item mb-5'>
        <canvas id="myChart3" style={{ width: '100%', maxWidth: '600px' }}></canvas>
        </div>
        </div>


      </div>
    </>
  );
}

export default Overview;
