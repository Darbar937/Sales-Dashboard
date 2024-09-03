// src/components/SalesChart.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ['6/30/2024', '7/6/2024', '7/13/2024', '7/21/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4, 3, 2, 1],
        borderColor: '#FFA726',
        backgroundColor: '#FFA726',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Sales',
        data: [1404, 1200, 800, 400],
        borderColor: '#26A69A',
        backgroundColor: '#26A69A',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesChart;
