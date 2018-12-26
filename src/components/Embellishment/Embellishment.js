import React from 'react';
import classes from './Embellishment.module.css';

const Embellishment = () => {
  return(
    <div className={classes.container}>
      <div className={classes.wrapper1}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
      </div>
      <div className={classes.wrapper2}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
      </div>
      <div className={classes.wrapper3}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
    </div>
  );
}
export default Embellishment;
