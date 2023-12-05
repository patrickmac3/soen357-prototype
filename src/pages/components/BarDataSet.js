import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


const BarDataSet = ({data})=> {
    const dataset = data.map(({ income, expenses, month }) => ({
        income,
        expenses,
        month
    }));
    
    const valueFormatter = (value) => `$${value}`;
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'income', label: 'Income', valueFormatter },
        { dataKey: 'expenses', label: 'Expenses', valueFormatter }
      ]}
      yAxis={[{ label: 'Amount' }]}
      width={500}
      height={300}
      sx={{
        '.your-axis-classes .your-label-classes': {
          transform: 'translate(-20px, 0)'
        }
      }}
    />
  );
};


export default BarDataSet;