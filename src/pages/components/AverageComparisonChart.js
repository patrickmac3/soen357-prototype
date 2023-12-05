// currentVsAveragecurrentChart.jsx
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const AverageComparisonChart = ({ current, average }) => {
  const chartSetting = {
    xAxis: [
      {
        label: 'Amount ($)',
      },
    ],
    width: 400,
    height: 200,
  };

  const dataset = [
    {
      category: 'This Month',
      amount: current,
    },
    {
      category: 'Average',
      amount: average,
    },
  ];

  const valueFormatter = (value) => `$${value}`;

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
      series={[
        {
          dataKey: 'amount',
          label: 'Amount',
          valueFormatter,
          color: (bar) => (bar.data.category === 'This Month' ? '#4CAF50' : '#2196F3'),
        },
      ]}
      layout="horizontal"
      {...chartSetting}
    />
  );
};

export default AverageComparisonChart;
