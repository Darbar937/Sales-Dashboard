import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        label: 'Portion of Sales',
        data: [55.8, 44.2],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container" style={{ width: '300px', height: '300px' }}>
      <Doughnut data={data} options={options} />
      <div className="total-sales">
        <span>Total</span>
        <span>2659</span>
      </div>
    </div>
  );
};

export default PieChart;
