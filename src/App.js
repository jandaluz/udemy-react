import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name: "Jay", age:28},
      {name:"Joe", age:30},
      {name:"Ray", age:40}
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState( {
      persons:[
        {name: newName, age:28},
        {name:"Joseph", age:30},
        {name:"Raymond", age:40}
      ]      
    })
  }

  nameChangedHandler = (event) => {
    console.log('changed');
    console.log(event.target.value);
    const newName = event.target.value;
    this.setState( {
      persons:[
        {name: "Jamison", age:28},
        {name: newName, age:30},
        {name:"Raymond", age:40}
      ]      
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is reall working!</p>
        <button onClick={(event) => this.switchNameHandler("Clyde")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age }
          click={this.switchNameHandler.bind(this, "Jamison")}
          changed={this.nameChangedHandler} >My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
