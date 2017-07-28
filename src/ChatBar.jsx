import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    //debugger
    console.log("Rendering <ChatBar/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)"
          defaultValue={ this.props.name } onBlur={(e) => this.props.handleUserName(e)} />
        <input className="chatbar-message"
          placeholder="Type a message and hit ENTER" onKeyPress={(e) => this.props.updateData(e)}/>
      </footer>
    );
  }
}
export default ChatBar;