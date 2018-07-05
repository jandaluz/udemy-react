import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is reall working!</p>
        <Person name="Jay" age="28"/>
        <Person name="Joe" age="30">My Hobbies: Racing </Person>
        <Person name="Ray" age="40"/>
      </div>
    );
  }
}

export default App;
