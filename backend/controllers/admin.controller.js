import { userModel } from "../models/auth.model.js";
import { bookingModel } from "../models/bookService.model.js";
import { petModel } from "../models/pet.model.js";
import { serviceModel } from "../models/service.model.js";


// ─── Helper Functions ────────────────────────────────────────────────────────
const thisMonthRange = () => {
  const now = new Date();
  return {
    start: new Date(now.getFullYear(), now.getMonth(), 1),
    end: new Date(now.getFullYear(), now.getMonth() + 1, 1),
  };
};

const lastMonthRange = () => {
  const now = new Date();
  return {
    start: new Date(now.getFullYear(), now.getMonth() - 1, 1),
    end: new Date(now.getFullYear(), now.getMonth(), 1),
  };
};

const pctChange = (current, previous) =>
  previous === 0 ? 100 : +(((current - previous) / previous) * 100).toFixed(1);

// ─── Controller ───────────────────────────────────────────────────────────────
const getDashboardStats = async (req, res) => {
  try {
    // 1️⃣ Total Counts
    const [
      totalUsers, verifiedUsers, adminUsers,
      totalServices, approvedServices,
      totalBookings, totalPets
    ] = await Promise.all([
      userModel.countDocuments(),
      userModel.countDocuments({ isVerified: true }),
      userModel.countDocuments({ role: 'admin' }),

      serviceModel.countDocuments(),
      serviceModel.countDocuments({ status: 'Approved' }),

      bookingModel.countDocuments(),
      petModel.countDocuments(),
    ]);

    // 2️⃣ Monthly Counts
    const { start: tmStart, end: tmEnd } = thisMonthRange();
    const { start: lmStart, end: lmEnd } = lastMonthRange();

    const [
      usersThis, usersLast,
      servicesThis, servicesLast,
      bookingsThis, bookingsLast,
      petsThis, petsLast
    ] = await Promise.all([
      userModel.countDocuments({ createdAt: { $gte: tmStart, $lt: tmEnd } }),
      userModel.countDocuments({ createdAt: { $gte: lmStart, $lt: lmEnd } }),

      serviceModel.countDocuments({ createdAt: { $gte: tmStart, $lt: tmEnd } }),
      serviceModel.countDocuments({ createdAt: { $gte: lmStart, $lt: lmEnd } }),

      bookingModel.countDocuments({ createdAt: { $gte: tmStart, $lt: tmEnd } }),
      bookingModel.countDocuments({ createdAt: { $gte: lmStart, $lt: lmEnd } }),

      petModel.countDocuments({ createdAt: { $gte: tmStart, $lt: tmEnd } }),
      petModel.countDocuments({ createdAt: { $gte: lmStart, $lt: lmEnd } }),
    ]);

    // 3️⃣ Stats Cards Data
    const statsCards = [
      {
        title: 'Total Users',
        value: totalUsers.toString(),
        change: `${pctChange(usersThis, usersLast)}%`,
        icon: 'FaUsers',
        color: '#4caf50',
      },
      {
        title: 'Verified Users',
        value: verifiedUsers.toString(),
        change: `${pctChange(usersThis, usersLast)}%`,
        icon: 'FaCheckCircle',
        color: '#2196f3',
      },
      {
        title: 'Admin Users',
        value: adminUsers.toString(),
        change: `${pctChange(usersThis, usersLast)}%`,
        icon: 'FaUserShield',
        color: '#f44336',
      },
      {
        title: 'Total Services',
        value: totalServices.toString(),
        change: `${pctChange(servicesThis, servicesLast)}%`,
        icon: 'FaTools',
        color: '#ff9800',
      },
      {
        title: 'Approved Services',
        value: approvedServices.toString(),
        change: `${pctChange(servicesThis, servicesLast)}%`,
        icon: 'FaThumbsUp',
        color: '#3f51b5',
      },
      {
        title: 'Total Bookings',
        value: totalBookings.toString(),
        change: `${pctChange(bookingsThis, bookingsLast)}%`,
        icon: 'FaCalendarAlt',
        color: '#009688',
      },
      {
        title: 'Total Pets',
        value: totalPets.toString(),
        change: `${pctChange(petsThis, petsLast)}%`,
        icon: 'FaDog',
        color: '#795548',
      },
    ];

    // 4️⃣ Moderation Status for Pie Chart
    const [pending, approved, rejected] = await Promise.all([
      serviceModel.countDocuments({ status: 'Pending' }),
      serviceModel.countDocuments({ status: 'Approved' }),
      serviceModel.countDocuments({ status: 'Rejected' }),
    ]);

    const moderationStatus = [
      { name: 'Pending', value: pending },
      { name: 'Approved', value: approved },
      { name: 'Rejected', value: rejected },
    ];

    // ✅ Send the Response
    res.status(200).json({
      success: true,
      data: {
        statsCards,
        moderationStatus,
      },
    });

  } catch (error) {
    console.error('Dashboard Stats Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


const getAllUsers = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const banUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getPendingServices = async (req, res) => {
  try {
    const services = await serviceModel
      .find({ verified: false })
      .populate("owner", "name email");
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch pending services" });
  }
};

const verifyService = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const service = await serviceModel.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    if (status === "Approved") {
      service.verified = true;
      service.status = "Approved";
    } else if (status === "Rejected") {
      service.verified = false;
      service.status = "Rejected";
    } else if (status === "Banned") {
      service.verified = false;
      service.status = "Banned";
    }

    await service.save();
    res.status(200).json({ message: "Service status updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating service status" });
  }
};

export {
  getDashboardStats,
  getAllUsers,
  banUser,
  getPendingServices,
  verifyService,
};
