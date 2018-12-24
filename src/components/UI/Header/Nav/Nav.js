import React from 'react';
import './Nav.css';
import NavButton from './NavButton/NavButton';
import Logo from '../../../Logo/Logo';

const Nav = (props) => {
  let navStyle = "Nav";
  if(props.isMenuOpen ){
    navStyle = navStyle + " menuIsOpen";
  }

  return (
    <div className={navStyle}>
      <Logo menuIsOpen={props.isMenuOpen}/>
      <NavButton
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
