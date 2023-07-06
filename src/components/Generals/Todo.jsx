import {useState}from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/todo.css"
import {useReducer} from 'react'










const  reducer=(state,action)=>{
  switch (action.type){
     
    case 'AddTask':
      return{
        todos:[...state.todos,{id:Date.now(),text:action.payload}],
        todo:''
      }


    case 'DeleteTask':
      return{
        ...state,
        todos:state.todos.filter((todo)=>todo.id!==action.payload)
      }


    case 'SetTask':
      return{
        ...state,
        todo:action.payload
      }

    default:
      return state



  }



}






const Todo = () => {

  const [{todos,todo},dispatch]=useReducer(reducer,{todos:[],todo:''})
  // const [todo,settodo]=useState('')

  // const [todos,settodos]=useState([])

  // const deleteItem=(id)=>{
  //   const newitems=todos.filter((item)=>item.id!==id)
  //   settodos(newitems)
  // }

  const handleDelete = (id) => {
    dispatch({ type: 'DeleteTask', payload: id });
  };




  return (


    <div>

    
    <div>
        <Navbar  bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">TODO APP</Navbar.Brand>
       
        
      </Container>
    </Navbar>
    <h6>todo lists -{todos.length}</h6>

    <input   type='text' placeholder='add something' value={todo} onChange={(e)=>dispatch({type:'SetTask',payload:e.target.value})}></input>
  
  
  



       <Button  className="addbutton"variant="primary" onClick={()=>dispatch({type:'AddTask',payload:todo})}>Add</Button>
    </div>


    {todos.map((item)=>{

      return(
        <div  className="todos" >
          <div className="todo">

                  <h3 >{item.text}</h3>
                  
                  <Button  className="addbutton"variant="primary" onClick={()=>handleDelete(item.id)}>Delete</Button>


          </div>

        </div>
      )



    })}


    </div>


  )
}

export default Todo