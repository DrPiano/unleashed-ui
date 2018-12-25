import React from 'react';
import classes from './DesktopMenu.module.css';

const DesktopMenu = () =>{
  return (
    <div>
      <div class={classes.leftParent}>
        <div>
          address
          PhoneNumber
          Email
          SocialIcons
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class={classes.rightSub}>
        <li><a href="#">Community</a></li>
        <li><a href="#">Meet the Team</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="#">Careers</a></li>
      </div>
    </div>
  );
}
export default DesktopMenu;
