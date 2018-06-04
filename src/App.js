import React, { Component } from 'react';

import availableIcons from './availableIcons';

class App extends Component {
  static style = {
    fontFamily: 'Triptease Icons',
    fontSize: '32px',
    textAlign: 'center'
  };

  render() {
    return (
      <div style={App.style}>
        {availableIcons.map((icon, key) => <div key={key}>beer</div>)}
      </div>
    );
  }
}

export default App;
