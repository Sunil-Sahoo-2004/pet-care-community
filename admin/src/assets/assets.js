// Import images
import AdminBg from "./Admin_Bg_Image.png";
import order_icon from "./order_icon.png";
import profile_image from "./profile_image.png";

// Import icons from react-icons
import {
  FaUsers,
  FaComments,
  FaShieldAlt,
  FaFlag,
  FaPlusCircle,
  FaListAlt,
  FaCheckCircle,
  FaBullhorn,
  FaLock,
  FaUserPlus,
  FaComment,
  FaPlusSquare,
  FaExclamationTriangle,
  FaUserFriends,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";

// Export image assets
export const assets = {
  AdminBg,
  order_icon,
  profile_image,
};

// Dashboard Stats
export const stats = [
  {
    title: "Total Users",
    value: "12,457",
    change: "↑ 18% from last month",
    icon: FaUsers,
    color: "#5a5bd9",
  },
  {
    title: "Active Forums",
    value: "2,109",
    change: "↑ 5% in discussion activity",
    icon: FaComments,
    color: "#2bb673",
  },
  {
    title: "Services Offered",
    value: "348",
    change: "↑ 12 new services this quarter",
    icon: FaShieldAlt,
    color: "#f39c12",
  },
  {
    title: "Pending Reports",
    value: "14",
    change: "↓ 25% decrease since last week",
    icon: FaFlag,
    color: "#e74c3c",
  },
];

// Quick Actions
export const quickActions = [
  { label: "Add New Forum", icon: FaPlusCircle },
  { label: "Manage Service Categories", icon: FaListAlt },
  { label: "View User Reports", icon: FaUsers },
  { label: "Approve Pending Content", icon: FaCheckCircle },
  { label: "Broadcast Announcement", icon: FaBullhorn },
  { label: "Review Security Logs", icon: FaLock },
];

// Recent Activities
export const activities = [
  {
    icon: FaUserPlus,
    message: "New user registered: John Doe",
    time: "2 hours ago",
  },
  {
    icon: FaComment,
    message: "New forum post in “Pet Nutrition”",
    time: "4 hours ago",
  },
  {
    icon: FaPlusSquare,
    message: "New service added: Vet Consultation",
    time: "1 day ago",
  },
  {
    icon: FaExclamationTriangle,
    message: "Report submitted on abusive content",
    time: "2 days ago",
  },
];

export const data = [
  { month: "Jan", posts: 100, comments: 200, likes: 300 },
  { month: "Feb", posts: 200, comments: 250, likes: 400 },
  { month: "Mar", posts: 950, comments: 300, likes: 500 },
  { month: "Apr", posts: 400, comments: 230, likes: 300 },
  { month: "May", posts: 350, comments: 210, likes: 280 },
  { month: "Jun", posts: 420, comments: 250, likes: 320 },
];

export const data1 = [
  { name: "Approved", value: 82 },
  { name: "Pending", value: 14 },
  { name: "Rejected", value: 2 },
];

export const alerts = [
  {
    message: "Unauthorized login attempt detected from unknown IP.",
    time: "5 minutes ago",
    severity: "High",
  },
  {
    message: 'User "FluffyPaws" reported for inappropriate content.',
    time: "1 hour ago",
    severity: "High",
  },
  {
    message: 'Suspicious activity detected on "Admin1" account.',
    time: "3 hours ago",
    severity: "High",
  },
  {
    message: "5 new pending forum post approvals.",
    time: "5 hours ago",
    severity: "Medium",
  },
];

export const ForamsStats = [
  {
    title: "Total Forums",
    value: "10",
    subtitle: "Overall count of all forums",
    icon: FaComments,
  },
  {
    title: "Total Posts",
    value: "51,180",
    subtitle: "Across all active forums",
    icon: FaClipboardList,
  },
  {
    title: "Total Members",
    value: "22,250",
    subtitle: "Users participating in forums",
    icon: FaUserFriends,
  },
  {
    title: "New Forums This Month",
    value: "0",
    subtitle: "Created in the current month",
    icon: FaCalendarAlt,
  },
];
