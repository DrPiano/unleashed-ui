import React from 'react';
import Address from '../../../../Address/Address';
import PhoneNumber from '../../../../PhoneNumber/PhoneNumber';
import StartEmail from '../../../../StartEmail/StartEmail';
import SocialIcons from '../../../../SocialIcons/SocialIcons';
import Embellishment from '../../../../Embellishment/Embellishment';

import classes from './DesktopMenu.module.css';

const DesktopMenu = () =>{
  return (
    <div class={classes.desktopMenu}>
        <div class={classes.leftSide}>
          <Address />
          <PhoneNumber desktopStyle />
          <StartEmail desktopStyle />
          <SocialIcons desktopStyle />
          <Embellishment />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li>
            <a href="#">About</a>
            <ul className={classes.rightSide}>
              <li><a href="#">Community</a></li>
              <li><a href="#">Meet the Team</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </div>
  );
}
export default DesktopMenu;
