import { useState , useEffect} from 'react'

const Usestate = () => {


  let initialstate=0;
    const [conut,setcount]=useState(initialstate)

     useEffect (() => {
     document.title=`you clicked ${conut} times`
     console.log("fghhj")
   
     
   },[])
   
   
    const previousstate=()=>{
        setcount(pre=>pre-1)
    }

    const updatestate=()=>{
        setcount(pre=>pre+1)
    }


    

  return (


    <div>

        <h1>count:    {conut}     </h1>


        <button  onClick={updatestate}>+</button>
        <button  onClick={()=>setcount(initialstate)}>reset</button>
        <button  onClick={previousstate}>-</button>








    </div>
  )
}

export default Usestate

