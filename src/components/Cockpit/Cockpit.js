import React from 'react';
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
        <div >
            <h1>Hi, I'm a react app!</h1>
            <h3>{props.appTitle}</h3>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
            style={btnStyle}
            onClick={props.btnClicked}>Show People</button>
        </div>
    )
}

export default cockpit;