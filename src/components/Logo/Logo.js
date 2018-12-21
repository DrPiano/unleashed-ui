import React from 'react';
import logo from '../../assets/icomoon/SVG/logo.svg'
import classes from './Logo.module.css';
//shorthand for returning a single statement;
const Logo = () => <img src={logo} className={classes.Logo} alt="logo"/>;
export default Logo;
