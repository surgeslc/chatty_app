import React, {Component} from 'react';

import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";
import NavBar from "./NavBar.jsx";
import uuidv4 from 'uuid/v4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
        messages: []
      //loading: false};
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    // Connect to WebSockets server
    console.log("componentDidMount <App />");
    //debugger
    const ws = new WebSocket("ws://localhost:3001/");
    this.socket = ws;
    //debugger
    this.socket.onopen = () => {
      //debugger
      this.socket.send("Client connected to server!");
    };

  // setTimeout(() => {
  //   console.log("Simulating incoming message");
  //   // Add a new message to the list of messages in the data store
  //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //   const messages = this.state.messages.concat(newMessage)
  //   // Update the state of the app component.
  //   // Calling setState will trigger a call to render() in App and all child components.
  //   this.setState({messages: messages})
  //   }, 3000);
  }

  handleUserName(e){
    //console.log("handleUserName called");
    //console.log("Target class:", e.target.class);
    //console.log("Target name:", e.target.name);
    if (e.target.value != "") {
      this.setState({currentUser: {name: e.target.value}});
    } else {
      this.setState({currentUser: {name: "Anonymous"}});
    }
    //console.log(this.props.currentUser.name);
  }

  updateData(e) {
    //console.log("updateData called");
    if (e.key == 'Enter') {
      //console.log(e.target.value);
      //console.log(this.state.currentUser.name);
      let newMessage = { username: this.state.currentUser.name, content: e.target.value};
      //console.log(newMessage);
      //let myMessage = "User " + newMessage.username + " said " + newMessage.content;
      newMessage = JSON.stringify(newMessage);
      //console.log(newestMessage);
      this.socket.send(newMessage);
    }

    //console.log(JSON.stringify(newMessage));
    //console.log(newMessage);
    //const messages = this.state.messages.concat(newMessage)
    //this.setState({messages: messages})
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar { ...this.state.currentUser } updateData={this.updateData} handleUserName={this.handleUserName} />
      </div>
    );
  }
}
export default App;
