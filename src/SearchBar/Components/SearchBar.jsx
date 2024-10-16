import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="flex justify-center mt-6">
      <div className="form-control w-full max-w-md relative">
        <input
          type="text"
          placeholder=" Search by name..."
          className="input input-bordered input-lg w-full pl-10 focus:outline-none"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>
    </div>
  );
}

export default SearchBar;
