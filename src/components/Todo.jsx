import {useState}from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/todo.css"



const Todo = () => {
  const [todo,settodo]=useState('')

  const [todos,settodos]=useState([])

  const deleteItem=(id)=>{
    const newitems=todos.filter((item)=>item.id!==id)
    settodos(newitems)
  }





  return (


    <div>

    
    <div>
        <Navbar  bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">TODO APP</Navbar.Brand>
       
        
      </Container>
    </Navbar>

    <input   type='text' placeholder='add something' value={todo} onChange={(e)=>settodo(e.target.value)}></input>
  
  
  



       <Button  className="addbutton"variant="primary" onClick={(e)=>settodos([...todos,{id:Date.now(),text:todo}])}>Add</Button>
    </div>

    {todos.map((item)=>{

      return(
        <div  className="todos" >
          <div className="todo">

                  <h3>{item.text}</h3>
                  
                  <Button  className="addbutton"variant="primary" onClick={()=>deleteItem(item.id)}>Delete</Button>


          </div>

        </div>
      )



    })}


    </div>


  )
}

export default Todo