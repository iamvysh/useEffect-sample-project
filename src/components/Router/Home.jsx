import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate()
  return (
    <div>

        welcome to homepage

        <button onClick={()=>navigate('/registration')}>Register</button>
        <button onClick={()=>navigate('/login')}>login</button>
        <h4>Explore the site</h4>







    </div>
  )
}

export default Home