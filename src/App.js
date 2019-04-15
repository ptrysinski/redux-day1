import React, { Component } from 'react';

import {sendMessage} from './store'

class App extends Component {
  render() {
    return (
      <div>
        <button
        onClick={() => sendMessage(prompt('receiver'), prompt('text'))}
        >
          Send message
        </button>
      </div>
    );
  }
}

export default App;
