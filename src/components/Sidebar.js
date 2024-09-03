// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBox, faShoppingCart, faUsers, faTruck, faStore, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><FontAwesomeIcon icon={faChartBar} /> Dashboard</li>
        <li><FontAwesomeIcon icon={faBox} /> Inventory</li>
        <li><FontAwesomeIcon icon={faShoppingCart} /> Order</li>
        <li><FontAwesomeIcon icon={faUsers} /> Customers</li>
        <li><FontAwesomeIcon icon={faTruck} /> Shipping</li>
        <li><FontAwesomeIcon icon={faStore} /> Channel</li>
        <li><FontAwesomeIcon icon={faCog} /> Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
