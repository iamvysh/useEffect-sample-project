import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const home=useNavigate()    
  return (
    <div>

        <form action="">

            <label htmlFor="">Name</label>
            <input type="text" name="" id="" /><br></br>

            


            <label htmlFor="">Pasword</label>
            <input type="password" name="" id="" /><br></br>


            <button type="button" onClick={()=>home("/")}>Login</button>




        </form>



    </div>
  )
}

export default Login