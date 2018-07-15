import React, { PureComponent } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';
class Persons extends PureComponent {

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
                    position={index}
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    authenticated={this.props.isAuthenticated}
                    changed={(event) => this.props.changed(event, person.id)} />
            </ErrorBoundary>
        });
    }
}
export default Persons;