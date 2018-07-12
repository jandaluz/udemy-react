import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor');
    this.state = {
      persons: [
        { id: '12ljkf', name: "Jay", age: 28 },
        { id: '2a23l1', name: "Joe", age: 30 },
        { id: '3flink', name: "Ray", age: 40 }
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()');
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()');
    console.log(nextProps);
  }
  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }
  /**
  state = {
    persons:[
      {id: '12ljkf', name: "Jay", age:28},
      {id: '2a23l1', name:"Joe", age:30},
      {id: '3flink', name:"Ray", age:40}
    ],
    showPersons:false
  }
**/
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
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    console.log('changed');
    const newName = event.target.value;

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const _person = {
      ...this.state.persons[personIndex],
      name: newName
    };

    const _persons = [
      ...this.state.persons
    ]
    _persons[personIndex] = _person;

    this.setState({
      persons: _persons
    })
  }

  togglePersonsHandler = (event) => {
    console.log('toggle persons');
    let show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  }
  render() {
    console.log('[App.js] Inside render()');
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
      style.backgroundColor = 'red';
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <button onClick={() => { this.setState({showPersons:true});} }>Show People</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          btnClicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App; //Radium is a "higher order component"
