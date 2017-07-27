import React, {Component} from 'react';

const uuidv4 = require('uuid/v4');

class ChatBar extends Component {

  _handleKeyPress(e){
    if (e.key === 'Enter') {
      console.log("From ChatBar");
      //console.log("Parent", this.props.parentFunction);
      //let newMessage = { type: 'chatty', username: this.state.data.currentUser.name, content:e.target.value }
      if (e.target.value) {
      let newMessage = { id: uuidv4(), username: "Fred", content: e.target.value }
      console.log("ChatBar:", newMessage);
      return this.props.parentFunction(newMessage.id, newMessage.username, newMessage.content);

    } else {
      return;
    }
      // if (newMessage.content.value = "") {
      //   console.log("No content in message");
      //   return;
      // }
      // if (newMessage.username = "") {
      //   console.log("Blank field - will use default username Anonymous");
      //   newMessage.username = "Anonymous";
      // }
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