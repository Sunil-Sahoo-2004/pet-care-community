import React from 'react';
import './UserActivityChart.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { data } from '../../assets/assets';

const UserActivityChart = () => (
  <div className="user-activity-chart">
    <h3>User Activity Over Time</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="posts" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="comments" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="likes" stroke="#f39c12" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default UserActivityChart;
