import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const sendEmail = (email, userName = "Anakin Skywalker") => {
  return fetch("http://localhost:3000/api/send_email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, userName })
  }).then(response => response.json());
};

class App extends Component {
  state = { email: "" ,
  username: ""};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input
            placeholder="email address to send to"
            onChange={ev => {
              this.setState({ email: ev.target.value });
            }}
            style={{ padding: "10px", fontSize: "1em" }}
          />

          <input
            placeholder="your username"
            onChange={ev => {
              this.setState({ username: ev.target.value });
            }}
            style={{ padding: "10px", fontSize: "1em" }}
          />

          <button
            onClick={() => {
              const { email, username } = this.state;
              if (email) {
                sendEmail(email, username).then(({ message }) => {
                  alert(`Message: ${message} Email: ${email} Username: ${username}`);
                });
              } else {
                alert("Please add an email and username");
              }
            }}
          >
            Send Email
          </button>
        </p>
      </div>
    );
  }
}

export default App;
