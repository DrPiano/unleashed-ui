import React, { Component } from 'react';
import Nav from '../../components/UI/Header/Nav/Nav';
import classes from './Layout.module.css';
import Menu from '../../components/UI/Header/Menu/Menu';
class Layout extends Component {
  state = {
    isMobile: false,
    menuIsOpen: false
  };

  menuToggleClickHandler = () => {
    this.setState((prevState) => {
      return {menuIsOpen: !prevState.menuIsOpen};
    });
  };

  render() {
    let menu;
    if ( this.state.menuIsOpen ){
      menu = <Menu />;
    } else {
      menu = null;
    }
    return (
      <div className={classes.Layout}>
        <Nav
          isMenuOpen={this.state.menuIsOpen}
          menuBtnClickedHandler={this.menuToggleClickHandler}/>
        {menu}
        <div>
            I am here!
        </div>
        <div>
            I am here!
        </div>
        <div>
            I am here!
        </div>
        <div>
            I am here!
        </div>
        <div>
            I am here!
        </div>
        <div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div><div>
            I am here!
        </div>
      </div>
    );
  }
}

export default Layout;
