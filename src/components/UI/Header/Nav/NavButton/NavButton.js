import React from 'react';
import classes from './NavButton.module.css';
import menuIcon from '../../../../../assets/icomoon/SVG/menu.svg'
import searchIcon from '../../../../../assets/icomoon/SVG/search.svg'
import shareIcon from '../../../../../assets/icomoon/SVG/share.svg'
const NavButton = (props) => {
  let icon = null;
  let mid = null;
  let menuButton = null;
  if(props.wichOne === 1){
    icon = menuIcon;
    menuButton = classes.MenuButton;
  } else if (props.wichOne === 2){
    icon = searchIcon;
    mid = classes.MiddleButton;
  } else if (props.wichOne === 3){
    icon = shareIcon;
  } else {
    icon = null;
  }

  return (
    <div className={classes.Container}>
      <button className={[classes.NavButton, mid, menuButton].join(' ')}>
        <img
          src={icon}
          className={classes.Icon}
          alt="icon"/>
        <span className={classes.NavButtonText}>{props.whatSay}</span>
      </button>
    </div>
    );
}
export default NavButton;
