import { useState } from "react";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location.trim()) return;
    onSearch(location);
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;