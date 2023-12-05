// IncomeVsExpensesChart.jsx
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const IncomeExpensesChart = ({ income, expenses }) => {
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
      category: 'Income',
      amount: income,
    },
    {
      category: 'Expenses',
      amount: expenses,
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
          color: (bar) => (bar.data.category === 'Income' ? '#4CAF50' : '#F44336'),
        },
      ]}
      layout="horizontal"
      {...chartSetting}
    />
  );
};

export default IncomeExpensesChart;
