import React, { useEffect, useState } from "react";
import "./MyServices.css";
import { deleteService, getMyServices } from "../../../services/serviceService";
import AddNewService from "./AddNewService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddPet, setShowAddPet] = useState(false);

  const fetchServices = async () => {
    try {
      const data = await getMyServices();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to fetch services");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (serviceId) => {
    try {
      await deleteService(serviceId);
      setServices((prev) => prev.filter((s) => s._id !== serviceId));
      toast.success("Service deleted successfully");
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Failed to delete service");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="my-services-section">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="my-services-header">
        <h3>My Services</h3>
        <button className="add-btn" onClick={() => setShowAddPet(true)}>
          + Add New Service
        </button>
      </div>

      {showAddPet && (
        <AddNewService
          onClose={() => {
            setShowAddPet(false);
            fetchServices();
          }}
        />
      )}

      <div className="services">
        {loading ? (
          <p>Loading services...</p>
        ) : services.length > 0 ? (
          services.map((service) => (
            <div className="service-card" key={service._id}>
              <div className="service-image">
                <img
                  src={`http://localhost:5000/uploads/${service.image}`}
                  alt={service.name}
                  className="image"
                />
              </div>

              <div className="service-content">
                <div className="service-header">
                  <h4>{service.name}</h4>
                  <span className="service-category">{service.category}</span>
                </div>

                <p className="service-rating">
                  <FaStar color="#fbbf24" style={{ marginRight: "4px" }} />
                  {service.rating || "4.9"} ({service.reviews || "128 reviews"})
                </p>

                <p className="service-description">
                  {service.description.length > 100
                    ? `${service.description.slice(0, 100)}...`
                    : service.description}
                </p>

                <div className="service-info">
                  <span className="service-location">📍 {service.address}</span>
                  <span className="service-price">₹ {service.price}</span>
                </div>

                <p className="service-status">
                  Status:{" "}
                  <span style={{ color: service.verified ? "green" : "red" }}>
                    {service.verified ? "Verified" : "Not Verified"}
                  </span>
                </p>

                <div className="service-actions">
                  <button className="view-btn">View Details</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No services found.</p>
        )}
      </div>
    </div>
  );
};

export default MyServices;
