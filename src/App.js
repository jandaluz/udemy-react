import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

  nameChangedHandler = (event, id) => {
    console.log('changed');
    const newName = event.target.value;

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const _person = {
      ...this.state.persons[personIndex],
      name:newName
    };

    const _persons = [
      ...this.state.persons
    ]
    _persons[personIndex] = _person;

    this.setState( {
      persons:_persons    
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
      backgroundColor: 'green',
      color: 'white',
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
              <ErrorBoundary key={person.id}> 
                <Person
                  name={person.name}
                  age={person.age} 
                  click={() => this.deletePersonHandler(index)} 
                  
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
                </ErrorBoundary>
            );
          })}
        </div> 
      );
      style.backgroundColor = 'red';
    }
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
        <div className="App">
          <h1>Hi, I'm a react app!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style} 
            onClick={this.togglePersonsHandler}>Show People</button>
          {persons}
        </div>
    );
  }
}

export default App; //Radium is a "higher order component"
