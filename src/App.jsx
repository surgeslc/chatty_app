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
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
  // Code will be written within comonentDidMount to connect to a WebSockets server
  console.log("componentDidMount <App />");
  const ws = new WebSocket("ws://localhost:3001");
  this.socket = ws;

  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
    }, 3000);
  }

  updateData(id, username, content) {
    //console.log("this", this);
    // console.log("Parent updateData: ENTER key pressed");
    const newMessage = { id: id, username: username, content: content}
    console.log("Parent>New Message is:", newMessage);
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar { ...this.state.currentUser } parentFunction={this.updateData} />
      </div>
    );
  }
}
export default App;
