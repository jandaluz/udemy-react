import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Cockpit.css';

const cockpit = (props) => {
    let classes = [];
    let btnStyle = {};
    if(props.showPersons) {
        btnStyle = {
            backgroundColor:'red'
        };
    }
    if(props.persons.length <= 2) {
      classes.push('red');
    } 
    if(props.persons.length <= 1) {
      classes.push('bold');
    }    
    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
            style={btnStyle}
            onClick={props.btnClicked}>Toggle People</button>
        </Aux>
    )
}

export default cockpit;