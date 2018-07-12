import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor');
    }
    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }
    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentwillReceiveProps()');
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()');
        return nextProps.persons !== this.props.persons;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()');
        console.log(nextProps);
    }
    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
    }
    render() {
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)} />
            </ErrorBoundary>
        });
    }
}
export default Persons;