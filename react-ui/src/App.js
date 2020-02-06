import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SendEmail from './components/SendEmail';
import Home from './components/Home';
import { NavLink, Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sending Email Within a React App</h1>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/send'>SendEmail</NavLink>
          </nav>
        </header>
        <Route exact path='/' component={Home} />
        <Route path='/send' component={SendEmail} />

      </div>
    )}
}

export default App;
