import React, { Children } from 'react';

const person = (props) => {
  return (
    <div>
      <p>My name is {props.name} and I'm {props.age}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  )
}

export default person;