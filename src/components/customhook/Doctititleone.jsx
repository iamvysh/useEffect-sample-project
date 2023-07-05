import React,{useState} from 'react'
import useDoccumenttitle from '../../hooks/useDoccumenttitle'


const Doctititleone = () => {
    
        const[count,setcount]=useState(0)
        useDoccumenttitle(count)
  return (
    <div>
            <h4>count:{count}</h4>
            <button onClick={()=>setcount(count+1)}>ADDD </button>




    </div>
  )
}

export default Doctititleone