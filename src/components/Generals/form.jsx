import {useState} from 'react'

const Form = () => {

    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
        cpassword:""

    })

    const buttonClick=()=>{
        // alert(`name is ${inputs}`)
        
        document.getElementById("display").innerHTML=`name is ${inputs.username}` + `<br />` +`age is ${inputs.age}`
    }

    const HandleSubmit=(e)=>{
        e.preventDefault()
    }
    


    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value

        setInputs({...inputs,[name]:value})

    }

  return (
    <div>
        <form onSubmit={HandleSubmit}>
            {/* <label>Name:</label>
            <input type='text' name="username" value={inputs.username} onChange={handleChange}  ></input><br /><br /> 

            <label>age:</label>
            <input type='number' name="age" value={inputs.age} onChange={handleChange} ></input><br /><br />  */}

            <div>
                <label htmlFor="username">username</label>
                <input
                    type='type'
                    placeholder='Username'
                    name='username'
                    value={inputs.username}
                    onChange={handleChange}
                    
                ></input>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    value={inputs.email}
                    onChange={handleChange}


                ></input>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    placeholder='PAssword'
                    name='password'
                    value={inputs.password}
                    onChange={handleChange}

                ></input>
            </div>
            <div>
                <label htmlFor="cpassword">Confirm password</label>
                <input
                    type='password'
                    placeholder='Confirm password'
                    name='cpassword'
                    value={inputs.cpassword}
                    onChange={handleChange}

                ></input>
            </div>

        

        

        

            <button onClick={buttonClick}>Submit</button>
            <div id='display'>

            </div>

        </form>
    </div>
  )
}

export default Form