import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {

    const loging=useNavigate()
  return (

    



    <div>

        <form action="">

            <label htmlFor="">Name</label>
            <input type="text" name="" id="" /><br></br>

            <label htmlFor="">E-mail</label>
            <input type="email" name="" id="" /><br></br>


            <label htmlFor="">Pasword</label>
            <input type="password" name="" id="" /><br></br>


            <button type="button" onClick={()=>loging("/login")}>Register</button>




        </form>



    </div>
  )
}

export default Registration