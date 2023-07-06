import { useState } from "react"


function PreviousState() {

  const initialCount=0;

const [couter,setcounter]=useState(initialCount)


const incrementFive=()=>{

  
    for( let i=0;i<5;i++){
      
      setcounter(count+1 ) 

      
    }
  

}




  return (
    <div>

        count:{couter}
        <button onClick={()=>setcounter(initialCount)}   >incount</button>
        <button onClick={()=>setcounter(couter+1)}   >increment</button>
      
        <button onClick={()=>setcounter(couter-1)}   >decrement</button>
        <button onClick={incrementFive}   >incrementbyFive</button>

        <button onClick={()=>setcounter(pre)}   >prestate</button>





    </div>
  )
}

export default PreviousState


