// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: [
      '', '', '', '', '', 'Feb',
      '', '', '', '', '', 'Mar',
      '', '', '', '', '', 'Apr',
      '', '', '', '', '', 'May',
      '', '', '', '', '', 'Jun',
      '', '', '', '', '', 'Jul',
      // '', '', '', '', '', '', 'Jul',
      // 'Aug', '', '', '', '', '', '',
    ],
    datasets: [
      {
        label: 'WPPOOL',
        data: [
          0, 18, 25, 35, 30, 40, 35,   // Jan
          40, 30, 35, 25, 30, 20, 25,   // Feb
          25, 35, 30, 40, 35, 45, 40,   // Mar
          50, 40, 45, 35, 40, 30, 35,   // Apr
          35, 45, 40, 50, 45, 55, 50,   // May
          60, 50, 55, 45, 50, 40, 45,   // Jun
          45, 55, 50, 60, 55, 65, 60,   // Jul
          70, 60, 65, 55, 60, 50, 55,   // Aug
          55, 65, 60, 70, 65, 75, 70,   // Sep
          80, 70, 75, 65, 70, 60, 65,   // Oct
          65, 75, 70, 80, 75, 85, 80,   // Nov
          90, 80, 85, 75, 80, 70, 75    // Dec
          ],
        borderColor: '#FC714D',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Google',
        data: [
          0, 5, 30, 20, 25, 15, 20,   // Feb
          15, 25, 20, 30, 25, 35, 30,   // Jan
          40, 30, 35, 25, 30, 20, 25,   // Apr
          20, 30, 25, 35, 30, 40, 35,   // Mar
          50, 40, 45, 35, 40, 30, 35,   // Jun
          25, 35, 30, 40, 35, 45, 40,   // May
          60, 50, 55, 45, 50, 40, 45,   // Aug
          35, 45, 40, 50, 45, 55, 50,   // Jul
          70, 60, 65, 55, 60, 50, 55,   // Oct
          45, 55, 50, 60, 55, 65, 60,   // Sep
          80, 70, 75, 65, 70, 60, 65,    // Dec
          55, 65, 60, 70, 65, 75, 70,   // Nov
        ],
        borderColor: '#615DE3',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Microsoft',
        data: [
          0, 20, 35, 25, 30, 20, 25,   // Feb
          20, 30, 25, 35, 30, 40, 35,   // Jan
          50, 40, 45, 35, 40, 30, 35,   // Apr
          25, 35, 30, 40, 35, 45, 40,   // Mar
          60, 50, 55, 45, 50, 40, 45,   // Jun
          35, 45, 40, 50, 45, 55, 50,   // May
          70, 60, 65, 55, 60, 50, 55,   // Aug
          45, 55, 50, 60, 55, 65, 60,   // Jul
          80, 70, 75, 65, 70, 60, 65,   // Oct
          55, 65, 60, 70, 65, 75, 70,   // Sep
          90, 80, 85, 75, 80, 70, 75,    // Dec
          65, 75, 70, 80, 75, 85, 80,   // Nov
        ],
        borderColor: '#AFCD80',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Twitter',
        data: [
          0, 15, 20, 30, 25, 35, 30,   // Jan
          35, 25, 30, 20, 25, 15, 20,   // Feb
          20, 30, 25, 35, 30, 40, 35,   // Mar
          40, 30, 35, 25, 30, 20, 25,   // Apr
          25, 35, 30, 40, 35, 45, 40,   // May
          50, 40, 45, 35, 40, 30, 35,   // Jun
          35, 45, 40, 50, 45, 55, 50,   // Jul
          60, 50, 55, 45, 50, 40, 45,   // Aug
          45, 55, 50, 60, 55, 65, 60,   // Sep
          70, 60, 65, 55, 60, 50, 55,   // Oct
          55, 65, 60, 70, 65, 75, 70,   // Nov
          80, 70, 75, 65, 70, 60, 65    // Dec
        ],
        borderColor: '#6F34A1',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: '',
      },
    },
    scales: {
      y: {
        min: -10,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
