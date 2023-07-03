import {useState} from 'react'

const Multiple = () => {


    const [mutiple,Setmultiple]=useState(1)


      const update=()=>{
        Setmultiple(pre=>pre*3)
    }


     const previous=()=>{

      
      

        Setmultiple(pre=>pre/3<=0?pre:1)
    }




  return (
    <div>

      <h1>{mutiple}</h1>

        <button onClick={update}>*3</button>

        <button onClick={previous}>/3</button>




    </div>
  )
}

export default Multiple;