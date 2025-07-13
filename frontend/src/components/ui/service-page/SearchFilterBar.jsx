import React from "react";
import "./SearchFilterBar.css";

const SearchFilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="search-filter-bar">
      <input
        type="text"
        name="search"
        placeholder="Search for groomers, trainers, vets..."
        value={filters.search}
        onChange={handleChange}
      />
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Veterinarian">Veterinarian</option>
        <option value="hostel">Hostel</option>
        <option value="hospital">Hospital</option>
        <option value="grooming">Grooming</option>
        <option value="Pet Supply Shop">Pet Supply Shop</option>
        <option value="Training">Training</option>
        <option value="Pet Boarding">Pet Boarding</option>
      </select>
      <select name="sort" value={filters.sort} onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
      </select>
      <button className="filter-btn">Filters</button>
    </div>
  );
};

export default SearchFilterBar;
