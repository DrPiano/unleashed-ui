import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';

class App extends Component {
  state = {
    isMobile: false
  };

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
