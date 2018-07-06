import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name: "Jay", age:28},
      {name:"Joe", age:30},
      {name:"Ray", age:40}
    ],
    showPersons:false
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

  togglePersonsHandler = (event) => {
    console.log('toggle persons');
    let show = this.state.showPersons;
    this.setState( {
      showPersons : !show
    });
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
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
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Show People</button>
        {persons}
      </div>
    );
  }
}

export default App;
