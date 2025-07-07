import React from 'react';
import './ModerationStatusChart.css';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { data1 } from '../../assets/assets';

const COLORS = ['#f06292', '#42a5f5', '#66bb6a'];

const ModerationStatusChart = () => (
  <div className="moderation-status-chart">
    <h3>Moderation Queue Status</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data1} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
          {data1.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ModerationStatusChart;
