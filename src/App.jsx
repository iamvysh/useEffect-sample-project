import "./App.css"

import { Route,Routes,useNavigate } from "react-router-dom"

import Registration from "./components/Router/Registration"
import Login from "./components/Router/Login"
import Home from "./components/Router/Home"




function App() {

  
  

  return (
    
    
    <div>
      
      <Routes>
        <Route  path="/registration" element={<Registration />}    />
        <Route  path="/login" element={<Login/>}    />
        <Route  path="/"  element={<Home/>} />
      </Routes>
        
    </div>
   
    
  )
}

export default App
