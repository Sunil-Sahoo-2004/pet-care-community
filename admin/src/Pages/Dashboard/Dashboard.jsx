import React from 'react'
import DashboardHeader from './DashboardHeader'
import StatsCards from './StatsCards'
import QuickActions from './QuickActions'
import RecentActivity from './RecentActivity'
import UserActivityChart from './UserActivityChart'

const Dashboard = () => {
  return (
   <div className="dashboard">
      <DashboardHeader />
      <StatsCards />
      <QuickActions />
      <RecentActivity />
      <UserActivityChart />
    </div>
  )
}

export default Dashboard
