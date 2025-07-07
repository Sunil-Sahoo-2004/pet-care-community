import React from 'react'
import DashboardHeader from './DashboardHeader'
import StatsCards from './StatsCards'
import QuickActions from './QuickActions'
import RecentActivity from './RecentActivity'
import UserActivityChart from './UserActivityChart'
import ModerationStatusChart from './ModerationStatusChart'
import SecurityAlerts from './SecurityAlerts'

const Dashboard = () => {
  return (
   <div className="dashboard">
      <DashboardHeader />
      <StatsCards />
      <QuickActions />
      <RecentActivity />
      <UserActivityChart />
      <ModerationStatusChart />
      <SecurityAlerts />
    </div>
  )
}

export default Dashboard
