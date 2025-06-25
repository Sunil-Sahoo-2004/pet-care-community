import React from "react";
import { resource_list } from "../../../assets/assets";
const SavedResources = () => {
  return (
    <div className="saved-resources-section">
      <div className="saved-resources-header">
        <h3>Saved Resources</h3>
        <button className="add-new-btn">+ Add New</button>
      </div>
      <div className="resource-cards">
        {resource_list.map((item) => (
          <div key={item.id} className="resource-card">
            <div className="resource-image">
              <img src={item.image} alt={item.label} />
            </div>
            <p className="resource-label">{item.label}</p>
            <h4 className="resource-title">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedResources;
