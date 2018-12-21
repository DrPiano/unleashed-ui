import React from 'react';
import classes from './Nav.module.css';
import NavButton from './NavButton/NavButton';
import Logo from '../../../Logo/Logo';

const Nav = (props) => {
  return (
    <div className={classes.Nav}>
      <Logo />
      <NavButton whatSay="Navigate" wichOne={1}/>
      <NavButton whatSay="Search" wichOne={2}/>
      <NavButton whatSay="Share" wichOne={3}/>
    </div>
  );
}
export default Nav;
