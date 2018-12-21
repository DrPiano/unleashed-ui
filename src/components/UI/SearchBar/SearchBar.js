import React from 'react';
import searchIcon from '../../../assets/icomoon/SVG/search.svg';
import './SearchBar.css';

const SearchBar = () => {
  return (
        <div className="search-bar">
          <input className="search-input" type="text" id="search" name="search" placeholder="Search"/>
          <div className="icon-container">
            <img src={searchIcon} alt="Search-icon" className="search-icon"/>
          </div>
        </div>
  );
}
export default SearchBar;
