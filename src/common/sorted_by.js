import React, { useState } from "react";

const SortByDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Best selling");

  const options = ["Best selling", "Price: Low to High", "Price: High to Low", "New arrivals"];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-gray-600 text-sm">
        Sort by:
      </label>
      <select
        id="sort"
        value={selectedOption}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortByDropdown;
