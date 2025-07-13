import React, { useEffect, useState } from 'react';
import './ModerationStatusChart.css';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const COLORS = ['#f06292', '#42a5f5', '#66bb6a'];

const ModerationStatusChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchModerationStatus = async () => {
      try {
        const res = await axios.get('/api/admin/dashboard');
        const moderation = res.data?.data?.moderationStatus || [];
        console.log("📊 Chart data:", moderation);
        setData(moderation);
      } catch (error) {
        console.error('Failed to fetch moderation data:', error);
      }
    };

    fetchModerationStatus();
  }, []);

  return (
    <div className="moderation-status-chart">
      <h3>Moderation Queue Status</h3>
      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ModerationStatusChart;
