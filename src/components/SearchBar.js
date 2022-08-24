import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="note-app__header">
      <h1>My Personal Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ...."
          onChange={(e) => onSearch(e)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
