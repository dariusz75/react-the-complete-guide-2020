import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    name: 'John',
    age: 22
  }

  nameChangedHandler = (event) => {
    this.setState({
      name: event.target.value,
      age: 32
    });
  }

  render() {

    const headingStyles = {
      backgroundColor: 'red',
      color: '#fff'
    };

    return (
      <div className="App">
        <h2 style={headingStyles}>Inline styling example</h2>
        <Person
          name={this.state.name}
          age={this.state.age}
          changed={this.nameChangedHandler} >
        </Person>
      </div>
    );
  }
}

export default App;
