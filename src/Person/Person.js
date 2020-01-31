import React, { Children } from 'react';

import './Person.css';

const person = (props) => {


  return (
    <div className="person">
      <p>My name is {props.name} and I'm {props.age}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  )
}

export default person;