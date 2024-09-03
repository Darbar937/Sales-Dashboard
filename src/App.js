// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import PieChart from './components/PieChart';
import SalesChart from './components/SalesChart';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <h1>Dashboard</h1>
        <div className="charts">
          <div className="chart-card">
            <h3>Sales vs Orders <i className="info-icon">ℹ️</i></h3>
            <SalesChart />
          </div>
          <div className="chart-card">
            <h3>Portion of Sales <i className="info-icon">ℹ️</i></h3>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
