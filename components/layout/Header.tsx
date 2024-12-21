import React, { useState } from 'react';

// Example accommodation types (can be customized)
const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Villa",
  "Apartment",
  "Chalet",
  "Cabin",
  "Beachfront",
  "Penthouse"
];

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedAccommodation, setSelectedAccommodation] = useState<string>("");

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle accommodation type selection
  const handleAccommodationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAccommodation(e.target.value);
  };

  return (
    <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        <h1 className="text-3xl font-bold">Property Finder</h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 justify-center mx-4">
        <input
          type="text"
          placeholder="Search for properties"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 rounded-md border border-gray-400 focus:outline-none w-1/2"
        />
      </div>

      {/* Accommodation Type Dropdown */}
      <div className="relative">
        <select
          value={selectedAccommodation}
          onChange={handleAccommodationChange}
          className="p-2 rounded-md border border-gray-400 focus:outline-none"
        >
          <option value="">Select Type of Accommodation</option>
          {accommodationTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Sign In / Sign Up Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Sign In
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
