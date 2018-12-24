import React from 'react';
import classes from './NavButton.module.css';
import menuIcon from '../../../../../assets/icomoon/SVG/menu.svg';
import searchIcon from '../../../../../assets/icomoon/SVG/search.svg';
import shareIcon from '../../../../../assets/icomoon/SVG/share.svg';
import closeIcon from '../../../../../assets/icomoon/SVG/cross.svg';
import Button from '@material-ui/core/Button';

const NavButton = (props) => {
  let icon = null;
  let wichButton = null;
  let hide = null;
  let closeIconStyle = null;
  if(props.wichOne === 1){
    icon = menuIcon;
    wichButton = classes.MenuButton;
    if(props.menuIsOpen) {
      icon = closeIcon;
      closeIconStyle = classes.closeIcon;
    }
  } else if (props.wichOne === 2){
    icon = searchIcon;
    wichButton = classes.SearchButton;
    hide = classes.Hide;
  } else if (props.wichOne === 3){
    icon = shareIcon;
    wichButton = classes.ShareButton;
    hide = classes.Hide;
  } else {
    icon = null;
  }

  return (
    <div className={[classes.Container, hide].join(' ')}>
      <Button onClick={props.click}>
        <div className={[classes.NavButton, wichButton].join(' ')}>
          <img
            src={icon}
            className={[classes.Icon, closeIconStyle].join(' ')}
            alt="icon"/>
          <span className={classes.NavButtonText}>{props.whatSay}</span>
        </div>
      </Button>
    </div>
    );
}
export default NavButton;
