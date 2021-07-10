import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';

export default function PieChartComponent({ percentage }) {
  const data = [
    { name: 'Group A', value: 100 - percentage },
    { name: 'Group B', value: percentage },

  ];
  const COLORS = ['#f5F6F7', '#379cf6'];
  return (
    <PieChart width={140} heigh height={140}>
      <Pie
        data={data}
        cx={70}
        cy={70}
        innerRadius={32}
        outerRadius={40}
        fill="#8884D8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

PieChartComponent.propTypes = {
  percentage: PropTypes.number.isRequired,
};
