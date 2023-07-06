import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({handleClick,children}) => {

    console.log((`rendering button ${children}`));
  return (

    <>

        <button onClick={handleClick} >
        {children }
    </button>

    <Link to='/home/button'>
    <button>hlo</button>
    </Link>
      </>


    
  )
}

export default React.memo(Button)