import React from 'react';
import logo from '../../assets/icomoon/SVG/logo.svg';
import secondLogo from '../../assets/icomoon/SVG/logo-2.svg';
import classes from './Logo.module.css';

const Logo = (props) =>{
  let whichLogo = logo;
  if(props.menuIsOpen){
    whichLogo = secondLogo;
  }
  return <img src={whichLogo} className={classes.Logo} alt="logo"/>;
}
export default Logo;
