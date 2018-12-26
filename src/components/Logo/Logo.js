import React from 'react';
import logo from '../../assets/icomoon/SVG/logo.svg';
import secondLogo from '../../assets/icomoon/SVG/logo-2.svg';
import classes from './Logo.module.css';

const Logo = (props) =>{
  let whichLogo = logo;
  let styles;
  if(props.menuIsOpen){
    whichLogo = secondLogo;
    styles = [classes.innerContainer,classes.largeLogo].join(' ');
  } else {
    styles = classes.innerContainer;
  }
  return (
    <div class={classes.container}>
      <div class={styles} >
        <img src={whichLogo} className={classes.logo} alt="logo"/>
      </div>
    </div>
    );
}
export default Logo;
