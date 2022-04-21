import React, { useState } from 'react';
import SearchModal from './SearchModal';

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="search_bar">
      <SearchModal searchOpen={searchOpen} close={() => setSearchOpen(false)} />
      <input
        className="search_input"
        type="text"
        placeholder="검색"
        onClick={() => setSearchOpen(!searchOpen)}
      />
      <div className="search_input not_focus">
        <i className="fa-solid fa-magnifying-glass fa-xl serch_icon" />
        <p>
          <span>검색</span>
          <i className="fa-solid fa-circle-xmark reset" />
        </p>
      </div>
    </div>
  );
};

export default React.memo(SearchBar);
