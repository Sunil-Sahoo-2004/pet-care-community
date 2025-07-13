import React, { useEffect, useState } from "react";
import SearchFilterBar from "../../components/ui/service-page/SearchFilterBar";
import ServiceGrid from "../../components/ui/service-page/ServiceGrid";
import axios from "axios";
import "./ServicePage.css";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    sort: "",
  });

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services/get-all");
      const verifiedServices = res.data.services.filter(s => s.status === "Approved");
      setServices(verifiedServices);
      setFilteredServices(verifiedServices);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    let temp = [...services];

    // 🔍 Filter by search
    if (filters.search) {
      temp = temp.filter(service =>
        service.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // 🎯 Filter by category
    if (filters.category) {
      temp = temp.filter(service =>
        service.category?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // 🔃 Sort by rating or price
    if (filters.sort === "rating") {
      temp.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (filters.sort === "price") {
      temp.sort((a, b) => a.price - b.price);
    }

    setFilteredServices(temp);
  }, [filters, services]);

  return (
    <div className="service-page">
      <h2 className="main-heading">Discover Local Pet Services</h2>
      <p className="sub-heading">
        Find trusted groomers, trainers, vets, and more. Connect with top-rated pet professionals in your area.
      </p>

      <SearchFilterBar filters={filters} setFilters={setFilters} />
      <ServiceGrid services={filteredServices} />
    </div>
  );
};

export default ServicePage;
