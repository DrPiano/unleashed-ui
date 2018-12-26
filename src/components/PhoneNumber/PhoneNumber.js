import React from 'react';
import classes from './PhoneNumber.module.css';

const PhoneNumber = ({desktopStyle}) => {
  let jsx;
  if (desktopStyle) {
    jsx = <div className={[classes.phoneNumber,classes.desktopDisplay].join(' ')}>
              <p><span>P:</span> 410.864.8980</p>
            </div>;
  } else {
    jsx = <div className={classes.phoneNumber}>
              <p>410-864-8980</p>
            </div>;
  }

  return jsx;
}

export default PhoneNumber;
