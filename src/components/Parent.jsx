import React from 'react'
import Child from './Child'

const Parent = (props) => {
  const {name}=props
  return (
    <div>
        <Child  name={name} age={25}/>
        
        </div>
  )
}

export default Parent
