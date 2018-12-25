import React from 'react';
import chevronRight from '../../../../../assets/icomoon/SVG/chevron-right.svg';
import classes from './Links.module.css';

const Links = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.linkContainer}>
        <li>
          <a href="#">
            Services
            <img src={chevronRight} alt="icon-right"/>
          </a>
        </li>
        <li>
          <a href="#">
            Resources
            <img src={chevronRight} alt="icon-right"/>
          </a>
        </li>
        <li>
          <a href="#">
            About Us
            <img src={chevronRight} alt="icon-right"/>
          </a>
        </li>
        <li>
          <a href="#">
            Contact Us
            <img src={chevronRight} alt="icon-right"/>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Links;
