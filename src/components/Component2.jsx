import React,{useContext} from 'react'
import { userContext } from './Context'

const Component2 = () => {


 const {counter,setcounter}  = useContext(userContext)
  return (
    <div>
        <h4>{counter}</h4>
        <button onClick={()=>setcounter(counter=>counter+1)}>increment</button>
        <button onClick={()=>setcounter(counter=>counter-1)}>decrement</button>



    </div>
  )
}

export default Component2