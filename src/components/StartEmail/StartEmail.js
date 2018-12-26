import React from 'react';
import classes from './StartEmail.module.css';

const StartEmail = ({desktopStyle}) => {
  let jsx;
  if(desktopStyle){
    jsx = <div className={[classes.startEmail,classes.desktopDisplay].join(' ')}><p><span>E:</span> start@unleashed-technologies.com</p></div>;
  } else {
    jsx = <div class={classes.startEmail}><p>start@unleashed-technologies.com</p></div>;
  }
  return jsx;

}
export default StartEmail;
