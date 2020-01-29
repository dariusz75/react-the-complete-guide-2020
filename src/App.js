import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <Person name="Max" age="20"></Person>
        <Person name="John" age="30"></Person>
        <Person name="George" age="40">And my hobby is music.</Person>
      </div>
    );
  }
}

export default App;
