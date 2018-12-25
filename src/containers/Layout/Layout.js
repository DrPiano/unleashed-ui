import React, { Component } from 'react';
import Nav from '../../components/UI/Header/Nav/Nav';
import classes from './Layout.module.css';
import Menu from '../../components/UI/Header/Menu/Menu';
class Layout extends Component {
  state = {
    isMobile: true,
    menuIsOpen: false
  };

  menuToggleClickHandler = () => {
    this.setState((prevState) => {
      return {menuIsOpen: !prevState.menuIsOpen};
    });
  };
  componentDidMount(){         //Need to figure out how to evaluate this actively on resize.
    let browserWidth = window.innerWidth;
    if(browserWidth >= 800){
      this.setState((prevState) => {
        return { isMobile: !prevState.isMobile};
      });
    }
  }
  render() {
    let menu;
    if ( this.state.menuIsOpen && this.state.isMobile ){
      menu = <Menu />;
    } else {
      menu = null;
    }
    return (
      <div className={classes.Layout}>
        <Nav
          layout={this.state.isMobile}
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
