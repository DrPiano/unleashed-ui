import React from 'react';
import logo from '../../assets/icomoon/SVG/logo.svg';
import secondLogo from '../../assets/icomoon/SVG/logo-2.svg';
import classes from './Logo.module.css';

const Logo = (props) =>{
  let whichLogo = logo;
  if(props.menuIsOpen){
    whichLogo = secondLogo;
  }
  return (
    <div class={classes.container}>
      <div class={classes.innerContainer} >
        <img src={whichLogo} className={classes.logo} alt="logo"/>
      </div>
    </div>
    );
}
export default Logo;
