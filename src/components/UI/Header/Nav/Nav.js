import React from 'react';
import classes from './Nav.module.css';
import NavButton from './NavButton/NavButton';
import Logo from '../../../Logo/Logo';

const Nav = (props) => {
  let navDisplay = props.isMobile
    ?(
      <>
      <Logo />
      <NavButton whatSay={null} wichOne={1}/>
      </>
     )
    :(
        <>
          <NavButton whatSay="Navigate" wichOne={1}/>
          <NavButton whatSay="Search" wichOne={2}/>
          <NavButton whatSay="Share" wichOne={3}/>
        </>
      );
  return (
    <div className={classes.Nav}>
      {navDisplay}
    </div>
  );
}
export default Nav;
