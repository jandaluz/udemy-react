import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id: '12ljkf', name: "Jay", age:28},
      {id: '2a23l1', name:"Joe", age:30},
      {id: '3flink', name:"Ray", age:40}
    ],
    showPersons:false
  }

  /** DEPRECATED
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
  */

  deletePersonHandler = (personIndex) => {
    console.log('delete: ' + personIndex);
    const persons = [...this.state.persons] //copy values to new var using spread
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age} 
                click={() => this.deletePersonHandler(index)} 
                key={person.id}/>
            );
          })}
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
