import { useEffect,useRef} from "react"


const Useref = () => {

    const inputREf=useRef(null)


  //  useEffect(()=>{

  //   inputREf.current.focus()

  //  },[])

  //  console.log(inputREf.current)

   const name= inputREf.current="hy"


  return (
    <div>

        {/* <input    ref={inputREf} type="text" /> */}
    <p>{name}</p>





    </div>
  )
}

export default Useref