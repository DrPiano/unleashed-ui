import React from 'react';
import classes from './Nav.module.css';
import NavButton from './NavButton/NavButton';

const Nav = () => {
  return (
    <div className={classes.Nav}>
    <NavButton whatSay="Navigate" wichOne={1}/>
    <NavButton whatSay="Search" wichOne={2}/>
    <NavButton whatSay="Share" wichOne={3}/>
    </div>
  );
}
export default Nav;
