import React from 'react';
import classes from './Nav.module.css';
import NavButton from './NavButton/NavButton';
import Logo from '../../../Logo/Logo';

const Nav = (props) => {
  let navStyle = [classes.nav];
  let shadowStyle = [classes.shadowFold];
  if(props.isMenuOpen ){
    navStyle = [classes.nav, classes.menuIsOpen].join(' ');
    shadowStyle = [classes.shadowFold, classes.largeShadow].join(' ');
  }

  return (
    <div className={navStyle}>
      <div class={shadowStyle}></div>
      <Logo menuIsOpen={props.isMenuOpen}/>
      <NavButton
        isMobile={props.layout}
        click={props.menuBtnClickedHandler}
        menuIsOpen={props.isMenuOpen}
        whatSay="Navigate"
        wichOne={1}/>
      <NavButton whatSay="Search" wichOne={2}/>
      <NavButton whatSay="Share" wichOne={3}/>
    </div>
  );
}
export default Nav;
