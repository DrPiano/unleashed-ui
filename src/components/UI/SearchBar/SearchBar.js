import React from 'react';
import searchIcon from '../../../assets/icomoon/SVG/search.svg';
import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
        <div className={classes.searchBar}>
          <input className={classes.searchInput} type="text" id="search" name="search" placeholder="Search"/>
          <div className={classes.iconContainer}>
            <img src={searchIcon} alt="Search-icon" className={classes.searchIcon}/>
          </div>
        </div>
  );
}
export default SearchBar;
