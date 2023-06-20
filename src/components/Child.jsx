import React from 'react'

function Child(props) {
  return (
    <div>
      <h1>My Contacts</h1>
      <h2>name:{props.name}</h2>
      <p>age:{props.age}</p>
    </div>
  )
}

export default Child