import React from 'react'

export const Person = (props) => {
  return (
    <div>
       <h1>{props.name}</h1>
       <p>{props.rating}</p>
       <p>{props.gender}</p>
       <p>{props.job}</p>
       <p>{props.city}</p>
    </div>
  )
}

