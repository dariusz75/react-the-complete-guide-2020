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

  switchNameHandler = () => {
    // don't do this
    // this.state.persons[0].name = 'Jan';
    // do this
    this.setState({
      persons: [
        { name: 'Jan', age: 22 },
        { name: 'George', age: 32 },
        { name: 'Maximilian', age: 42 }
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} >
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} >
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          clickExample={this.switchNameHandler}>
          Click on the paragraph above.
        </Person>
      </div>
    );
  }
}

export default App;
