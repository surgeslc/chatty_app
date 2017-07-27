import React, {Component} from 'react';

class ChatBar extends Component {

  _handleKeyPress(e){
    if (e.key === 'Enter') {
      console.log("From ChatBar");
      console.log("Parent", this.props.parentFunction);
      return this.props.parentFunction();
    }
  }

  render() {
    //debugger
    console.log("Rendering <ChatBar/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)"
          defaultValue={ this.props.name } />
        <input className="chatbar-message"
          placeholder="Type a message and hit ENTER" onKeyPress={(e) => this._handleKeyPress(e)}/>
      </footer>
    );
  }
}
export default ChatBar;