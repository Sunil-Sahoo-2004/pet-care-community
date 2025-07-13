import React, { useEffect, useState } from 'react';
import './StatsCards.css';
import axios from 'axios';
import * as Icons from 'react-icons/fa';

const StatsCards = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('/api/admin/dashboard'); 
        console.log("API Response:", res.data);

        if (res.data?.success && res.data?.data?.statsCards) {
          setStats(res.data.data.statsCards);
        } else {
          console.warn("Unexpected API structure", res.data);
        }
      } catch (err) {
        console.error("Failed to load stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p className="loading-text">Loading stats...</p>;

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => {
        const Icon = Icons[stat.icon]; 
        return (
          <div className="card" key={index}>
            <div className="card-content">
              <h4>{stat.title}</h4>
              <h2>{stat.value}</h2>
              <p>{stat.change}</p>
            </div>
            <div className="card-icon" style={{ color: stat.color }}>
              {Icon && <Icon size={30} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
