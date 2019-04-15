import React, { Component } from 'react';

import './store'
import { sendActionCreator } from './messages'
import { store } from './store';

class App extends Component {
  state = {
    messages: []
  }

  prepareMessage = () => {
    const receiver = prompt('wpisz odbiorcę')
    const text = prompt('wpisz treść wiadomości')

    const message = sendActionCreator(receiver, text)

    this.setState({
      messages: this.state.messages.concat(message)
    })
  }

  sendMessage = () => {
    this.state.messages.forEach(
      message => store.dispatch(message)
    )

    this.setState({ messages: [] })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.prepareMessage}
        >
          Prepare message
        </button>
        <button
          onClick={this.sendMessage}
        >
          Send message
        </button>
        <div>
          {
            this.state.messages.map(
              (message, i) => (
                <div
                  key={i + message.text}
                >
                  {message.receiver} |
                  {message.text}
                </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
