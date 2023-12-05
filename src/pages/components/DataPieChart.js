

import react from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const DataPieChart = ({data}) => {
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      // width={300}
      height={300}
    />
  );
}

export default DataPieChart;