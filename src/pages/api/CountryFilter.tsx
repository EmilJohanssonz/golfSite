import React from "react";

interface CountryFilterProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  uniqueCountries: string[];
}

const CountryFilter: React.FC<CountryFilterProps> = ({
  selectedCountry,
  setSelectedCountry,
  uniqueCountries,
}) => {
  return (
    <select
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
      className="border p-3 my-4 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option value="">All Countries</option>
      {uniqueCountries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountryFilter;
