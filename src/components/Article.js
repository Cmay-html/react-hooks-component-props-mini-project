import React from 'react';

function Article (props) {
    const dateValue = props.date || "January 1, 1970"
  return (
    <article>
        <h3>{props.title}</h3>
        <small>{dateValue}</small> 
        <p> {props.preview}</p>
    </article>
  )
}

export default Article