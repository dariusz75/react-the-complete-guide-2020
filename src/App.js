import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'John', age: 22 },
      { name: 'Shane', age: 32 },
      { name: 'Max', age: 42 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>And my hobby is music.</Person>
      </div>
    );
  }
}

export default App;
