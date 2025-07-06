import React from "react";
import "./FilterSidebar.css";
import Input from "../../../../atoms/input/Input";
import Button from "../../../../atoms/button/Button";


const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <h3>Filter Pets</h3>

      <label>Species</label>
      <select>
        <option>Select species</option>
      </select>

      <label>Breed</label>
      <select>
        <option>Select breed</option>
      </select>

      <div className="filters">
        <label>Size</label>
        <div className="checkbox-group">
          {["Small", "Medium", "Large", "Extra Large"].map((size) => (
            <label key={size}>
              <input type="checkbox" /> {size}
            </label>
          ))}
        </div>
      </div>

      <div className="filters">
        <label>Age</label>
        <div className="checkbox-group">
          {["Baby", "Young", "Adult", "Senior"].map((age) => (
            <label key={age}>
              <input type="checkbox" /> {age}
            </label>
          ))}
        </div>
      </div>

      <div className="filters">
        <label>Location</label>
        <Input type="text" placeholder="Enter zip code or city" />
      </div>

      <div className="filters">
        <label>Temperament</label>
        <div className="checkbox-group">
          {[
            "Friendly",
            "Playful",
            "Calm",
            "Energetic",
            "Independent",
            "Affectionate",
            "Shy",
          ].map((trait) => (
            <label key={trait}>
              <input type="checkbox" /> {trait}
            </label>
          ))}
        </div>
      </div>

      <div className="filters">
        <label>Special Needs</label>
        <div className="checkbox-group">
          {["Medical Care", "Behavioural Support", "Dietary Restrictions"].map(
            (need) => (
              <label key={need}>
                <input type="checkbox" /> {need}
              </label>
            )
          )}
        </div>
      </div>

      <Button text="Apply Filters" className="apply-btn" />
      <Button text="Clear Filters" className="clear-btn" />
    </aside>
  );
};

export default FilterSidebar;
