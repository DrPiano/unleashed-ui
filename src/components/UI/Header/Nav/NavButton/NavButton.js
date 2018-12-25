import React from 'react';
import classes from './NavButton.module.css';
import menuIcon from '../../../../../assets/icomoon/SVG/menu.svg';
import searchIcon from '../../../../../assets/icomoon/SVG/search.svg';
import shareIcon from '../../../../../assets/icomoon/SVG/share.svg';
import closeIcon from '../../../../../assets/icomoon/SVG/cross.svg';
import closeIconRed from '../../../../../assets/icomoon/SVG/cross-red.svg';
import Button from '@material-ui/core/Button';

const NavButton = (props) => {
  let icon = null;
  let wichButton = null;
  let hide = null;
  let closeIconStyle = null;
  if(props.wichOne === 1){
    icon = menuIcon;
    wichButton = classes.menuButton;
    if(props.menuIsOpen) {
      icon = closeIconRed;
      closeIconStyle = classes.closeIcon;
    }
    if(props.menuIsOpen && !props.isMobile){
      icon = closeIcon;
    }
  } else if (props.wichOne === 2){
    icon = searchIcon;
    wichButton = classes.searchButton;
    hide = classes.hide;
  } else if (props.wichOne === 3){
    icon = shareIcon;
    wichButton = classes.shareButton;
    hide = classes.hide;
  } else {
    icon = null;
  }

  return (
    <div className={[classes.container, hide].join(' ')}>
      <Button onClick={props.click}>
        <div className={[classes.navButton, wichButton].join(' ')}>
          <img
            src={icon}
            className={[classes.icon, closeIconStyle].join(' ')}
            alt="icon"/>
          <span className={classes.navButtonText}>{props.whatSay}</span>
        </div>
      </Button>
    </div>
    );
}
export default NavButton;
