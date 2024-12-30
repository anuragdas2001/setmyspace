import React, { useState, useEffect } from "react";

const DropdownWithData = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(
        "https://api-dev.autoby24.ch/api/core/country?limit=all"
      );
      const data = await response.json();
      setCountries(data.results || []);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStateData = async (country) => {
    try {
      const response = await fetch(
        `https://api-dev.autoby24.ch/api/core/state?country=${encodeURIComponent(
          country
        )}&limit=all`
      );
      const data = await response.json();
      setStates(data.results || []);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCityData = async (state) => {
    try {
      const response = await fetch(
        `https://api-dev.autoby24.ch/api/core/city?state=${encodeURIComponent(
          state
        )}&limit=all`
      );
      const data = await response.json();
      setCities(data.results || []);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates([]);
    setCities([]);
    setSelectedState("");
    setSelectedCity("");
    if (country) fetchStateData(country);
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities([]);
    setSelectedCity("");
    if (state) fetchCityData(state);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
  };

  return (
    <div className="max-w-4xl mt-16 mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Dynamic Location Selector
      </h2>

      {/* Country Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="country"
          className="block text-lg font-medium text-blue-700 mb-2"
        >
          Select Country
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800"
        >
          <option value="">Choose a Country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="state"
          className="block text-lg font-medium text-blue-700 mb-2"
        >
          Select State
        </label>
        <select
          id="state"
          value={selectedState}
          onChange={handleStateChange}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 transition-opacity duration-200 ${
            states.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!states.length}
        >
          <option value="">Choose a State</option>
          {states.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="city"
          className="block text-lg font-medium text-blue-700 mb-2"
        >
          Select City
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 transition-opacity duration-200 ${
            cities.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!cities.length}
        >
          <option value="">Choose a City</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {/* Selected Data Display */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          Your Selection
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Country:</strong> {selectedCountry || "None selected"}
          </li>
          <li>
            <strong>State:</strong> {selectedState || "None selected"}
          </li>
          <li>
            <strong>City:</strong> {selectedCity || "None selected"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownWithData;
