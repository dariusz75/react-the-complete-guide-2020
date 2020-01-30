import React, { Children } from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.clickExample} >My name is {props.name} and I'm {props.age}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;