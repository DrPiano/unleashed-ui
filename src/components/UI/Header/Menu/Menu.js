import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import Links from './Links/Links';
import PhoneNumber from '../../PhoneNumber/PhoneNumber';
import StartEmail from '../../StartEmail/StartEmail';
import SalesEmail from '../../SalesEmail/SalesEmail';
import SocialIcons from '../../SocialIcons/SocialIcons';

import classes from './Menu.module.css';

const Menu = () => {
  return (
      <>
        <div class={classes.menu}>
            <SearchBar />
            <Links />
            <div>
              <PhoneNumber />
              <StartEmail />
              <SalesEmail />
              <SocialIcons />
            </div>
        </div>
      </>
  );
}
export default Menu;
