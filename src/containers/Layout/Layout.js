import React, { Component } from 'react';
import Nav from '../../components/UI/Header/Nav/Nav';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    isMobile: true
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Nav isMobile={this.state.isMobile}/>
      </div>
    );
  }
}

export default Layout;
