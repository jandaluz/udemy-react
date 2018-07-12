import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
        console.log(classes);
    }
    if(props.persons.length <= 2) {
        assignedClasses.push('red');
    } 
    if(props.persons.length <= 1) {
        assignedClasses.push('bold');
    }    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.btnClicked}>Toggle People</button>
        </div>
    )
}

export default cockpit;