import React from 'react';
import facebook from '../../../assets/icomoon/SVG/facebook2.svg';
import instagram from '../../../assets/icomoon/SVG/instagram.svg';
import twitter from '../../../assets/icomoon/SVG/twitter.svg';
import linkedin from '../../../assets/icomoon/SVG/linkedin.svg';

import classes from './SocialIcons.module.css';

const SocialIcons = () => {
  return(
        <div class={classes.container}>
          <img src={instagram} alt="instagram icon"/>
          <img src={facebook} alt="facebook icon"/>
          <img src={linkedin} alt="linkedin icon"/>
          <img src={twitter} alt="twitter icon"/>
        </div>
  );
}
export default SocialIcons;
