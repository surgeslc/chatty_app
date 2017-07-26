import React, {Component} from 'react';

import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";
import NavBar from "./NavBar.jsx";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
        messages: [
          {
            username: "Bob",
          content: "Has anyone seen my marbles?",
          },
          {
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ],
      loading: false};
  }
  render() {
    //console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar { ...this.state.currentUser } />
      </div>
    );
  }
}
export default App;
