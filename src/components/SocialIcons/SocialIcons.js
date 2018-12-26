import React from 'react';
import facebookSquare from '../../assets/icomoon/SVG/facebook-square.svg';
import instagram from '../../assets/icomoon/SVG/instagram.svg';
import twitter from '../../assets/icomoon/SVG/twitter.svg';
import linkedinSquare from '../../assets/icomoon/SVG/linkedin-square.svg';

import linkedin from '../../assets/icomoon/SVG/linkedin.svg';
import facebook from '../../assets/icomoon/SVG/facebook.svg';
import dribbble from '../../assets/icomoon/SVG/dribbble.svg';
import behance from '../../assets/icomoon/SVG/behance.svg';

import classes from './SocialIcons.module.css';

const SocialIcons = (desktopStyle) => {
  let styles = classes.container;
  let jsx = (
    <>
      <a href="https://www.instagram.com" target="_blank">
        <img src={instagram} alt="instagram icon"/>
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <img src={facebookSquare} alt="facebook icon"/>
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <img src={linkedinSquare} alt="linkedin icon"/>
      </a>
      <a href="https://twitter.com" target="_blank">
        <img src={twitter} alt="twitter icon"/>
      </a>
    </>
  );
  if (desktopStyle) {
    styles = [classes.container,classes.desktopDisplay].join(' ');
    jsx = (
      <>
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="facebook icon"/>
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={twitter} alt="twitter icon"/>
        </a>
        <a href="https://dribbble.com" target="_blank">
          <img src={dribbble} alt="dribbble icon"/>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <img src={linkedin} alt="linkedin icon"/>
        </a>
        <a href="https://behance.com" target="_blank">
          <img src={behance} alt="Behance icon"/>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="instagram icon"/>
        </a>
      </>
    );
  }

  return (
    <div class={styles}>
      {jsx}
    </div>
  );
}
export default SocialIcons;
