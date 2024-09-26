import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [filters, setFilters] = useState({
    dateRange: { start: '', end: '' },
    zone: '',
    courier: '',
    paymentMode: '',
    shipmentMode: ''
  });

  const [orders, setOrders] = useState([
    // Sample data
    {
      date: '2024-09-20',
      totalOrders: 10,
      pickupUnscheduled: 3,
      pickupScheduled: 5,
      inTransit: 4,
      delivered: 6,
      undelivered: 1,
      rto: 1,
      lostDamaged: 0,
      cancelled: 2
    },
    {
      date: '2024-08-29',
      totalOrders: 20,
      pickupUnscheduled: 8,
      pickupScheduled: 7,
      inTransit: 10,
      delivered: 10,
      undelivered: 2,
      rto: 3,
      lostDamaged: 1,
      cancelled: 1
    },
    // Add more sample data here...
  ]);

  const [filteredOrders, setFilteredOrders] = useState([]);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  // Filter the orders whenever filters change
  useEffect(() => {
    let filtered = orders;

    // Date Range Filter
    if (filters.dateRange.start && filters.dateRange.end) {
      filtered = filtered.filter(
        (order) =>
          new Date(order.date) >= new Date(filters.dateRange.start) &&
          new Date(order.date) <= new Date(filters.dateRange.end)
      );
    }

    // Additional filters can be added here
    setFilteredOrders(filtered);
  }, [filters, orders]);

  return (
    <div className="order-table-container">
      {/* Filters Section */}
      <div className="filters">
        <input
          type="date"
          name="start"
          placeholder="Start Date"
          value={filters.dateRange.start}
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              dateRange: { ...prevFilters.dateRange, start: e.target.value }
            }))
          }
        />
        <input
          type="date"
          name="end"
          placeholder="End Date"
          value={filters.dateRange.end}
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              dateRange: { ...prevFilters.dateRange, end: e.target.value }
            }))
          }
        />
        <input
          type="text"
          name="zone"
          placeholder="Zone"
          value={filters.zone}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="courier"
          placeholder="Courier"
          value={filters.courier}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="paymentMode"
          placeholder="Payment Mode"
          value={filters.paymentMode}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="shipmentMode"
          placeholder="Shipment Mode"
          value={filters.shipmentMode}
          onChange={handleFilterChange}
        />
      </div>

      {/* Table Section */}
      <div className="table-container">
  <table className="order-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Total Orders</th>
        <th>Pickup Unscheduled</th>
        <th>Pickup Scheduled</th>
        <th>InTransit</th>
        <th>Delivered</th>
        <th>Undelivered</th>
        <th>RTO</th>
        <th>Lost/Damaged</th>
        <th>Cancelled</th>
      </tr>
    </thead>
    <tbody>
      {filteredOrders.map((order, index) => (
        <tr key={index}>
          <td>{order.date}</td>
          <td>{order.totalOrders}</td>
          <td>{order.pickupUnscheduled}</td>
          <td>{order.pickupScheduled}</td>
          <td>{order.inTransit}</td>
          <td>{order.delivered}</td>
          <td>{order.undelivered}</td>
          <td>{order.rto}</td>
          <td>{order.lostDamaged}</td>
          <td>{order.cancelled}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Orders;