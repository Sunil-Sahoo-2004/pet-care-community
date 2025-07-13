import React, { useEffect, useState } from "react";
import "./ServiceTable.css";
import { FaCheck, FaTimes, FaBan } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceTable = () => {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services/get-all", {
        withCredentials: true,
      });
      let filtered = res.data.services;

      switch (filter) {
        case "approved":
          filtered = filtered.filter((s) => s.status === "Approved");
          break;
        case "pending":
          filtered = filtered.filter((s) => s.status === "Pending");
          break;
        case "rejected":
          filtered = filtered.filter((s) => s.status === "Rejected");
          break;
        case "banned":
          filtered = filtered.filter((s) => s.status === "Banned");
          break;
        default:
          break;
      }

      setServices(filtered);
    } catch (error) {
      toast.error("Failed to fetch services");
      console.error(error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/services/${id}/verify`,
        { status: newStatus },
        { withCredentials: true }
      );
      toast.success(`Service marked as ${newStatus}`);
      fetchServices();
    } catch (error) {
      toast.error("Failed to update service status");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [filter]);

  return (
    <div className="service-table-section">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="service-table-header">
        <h3>Manage Services</h3>
        <select
          className="service-filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Services</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
          <option value="banned">Banned</option>
        </select>
      </div>

      <table className="service-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Provider</th>
            <th>Category</th>
            <th>Status</th>
            <th>Submitted At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>{service.owner?.name || "N/A"}</td>
              <td>{service.category}</td>
              <td>
                <span className={`status ${service.status?.toLowerCase()}`}>
                  {service.status}
                </span>
              </td>
              <td>{new Date(service.createdAt).toLocaleString()}</td>
              <td>
                {service.status === "Pending" && (
                  <>
                    <FaCheck
                      className="approve"
                      title="Approve"
                      onClick={() => updateStatus(service._id, "Approved")}
                    />
                    <FaTimes
                      className="reject"
                      title="Reject"
                      onClick={() => updateStatus(service._id, "Rejected")}
                    />
                    <FaBan
                      className="ban"
                      title="Ban"
                      onClick={() => updateStatus(service._id, "Banned")}
                    />
                  </>
                )}

                {service.status === "Approved" && (
                  <FaBan
                    className="ban"
                    title="Ban"
                    onClick={() => updateStatus(service._id, "Banned")}
                  />
                )}

                {service.status === "Banned" && (
                  <FaCheck
                    className="approve"
                    title="Re-Approve"
                    onClick={() => updateStatus(service._id, "Approved")}
                  />
                )}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
