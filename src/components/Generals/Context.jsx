import React,{createContext,useState} from 'react'
import Component2 from './Component2'



export const userContext=createContext()

const Context = () => {

    const[counter,setcounter]=useState(0)
  return (

    <div>


        <userContext.Provider value={{counter,setcounter}}>

            <Component2 />

        </userContext.Provider>


    </div>
  )
}

export default Context