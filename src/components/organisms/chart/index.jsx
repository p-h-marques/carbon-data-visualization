import React from 'react'
import { LineChart } from '@carbon/charts-react'

const chartOptions = {
  title: 'Economic Activity',
  axes: {
    bottom: {
      title: 'Date',
      mapsTo: 'data',
      scaleType: 'time',
    },
    left: {
      mapsTo: 'valor',
      title: 'Value (R$)',
      scaleType: 'linear',
    },
  },
  height: '400px',
  toolbar: {
    enabled: false,
  },
  timeScale: {
    addSpaceOnEdges: 0,
  },
}

const Chart = ({ data }) => {
  return <LineChart data={data} options={chartOptions}></LineChart>
}

export default Chart
