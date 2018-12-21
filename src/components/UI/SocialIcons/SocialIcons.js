import React from 'react';
import facebook from '../../../assets/icomoon/SVG/facebook2.svg';
import instagram from '../../../assets/icomoon/SVG/instagram.svg';
import twitter from '../../../assets/icomoon/SVG/twitter.svg';
import linkedin from '../../../assets/icomoon/SVG/linkedin.svg';

import './SocialIcons.css';

const SocialIcons = () => {
  return(
        <div class="social-icons-container">
          <img src={instagram} alt="instagram icon" className="social-icon"/>
          <img src={facebook} alt="facebook icon" className="social-icon"/>
          <img src={linkedin} alt="linkedin icon" className="social-icon"/>
          <img src={twitter} alt="twitter icon" className="social-icon"/>
        </div>
  );
}
export default SocialIcons;
