import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    message: '',
    messageList: [],
  }

  sendMessage = () => {
    this.state.message &&
    this.setState({
      message: '',
      messageList: [...this.state.messageList, this.state.message],
    });
    console.log(this.state.messageList);
  }

  handleInput = (event) => {
    this.setState({
      message: event.target.value,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <header>
            <h1>Chat</h1>
        </header>
        <section className="messages-wrap">
            <h2>Messages</h2>
            <div className="messages-list" id="messages-list">
                {this.state.messageList.map((message, id) => (
                  <div key={id}>
                    {message}
                  </div>
                ))}
            </div>
        </section>
        <section className="send-message clearfix">
            <h2>Send Message</h2>
            <div className="control-send-message">
                <input id="input-message" className="control-message" type="text" value={this.state.message} onChange={(event) => this.handleInput(event)}/>
                <button id="btn-send" className="control-message" onClick={this.sendMessage}>Send</button>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
