import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for course or club..."
      className="border p-3 my-4 w-full rounded-lg shadow-sm placeholder:text-sm placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-500"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
