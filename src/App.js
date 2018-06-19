import React, { Component } from 'react';
import IconList from './IconList';

class App extends Component {
  static style = {
    fontSize: '60px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  render() {
    return (
      <div style={App.style}>
        <IconList />
      </div>
    );
  }
}

export default App;
