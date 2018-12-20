import React, { Component } from 'react';
import Nav from './components/UI/Header/Nav/Nav';
import NavButton from './components/UI/Header/Nav/NavButton/NavButton';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
