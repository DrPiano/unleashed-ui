import React from 'react';
import logo from '../../assets/icomoon/SVG/logo.svg'
import classes from './Logo.module.css';

const Logo = () => {
  return <img src={logo} className={classes.Logo} alt="logo"/>;
}

export default Logo;
