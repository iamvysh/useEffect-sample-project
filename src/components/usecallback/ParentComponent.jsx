import {useState,useCallback,useMemo} from 'react'
import Title from './childs/Title'
import Count from './childs/Count'
import Button from './childs/Button'

const ParentComponent = () => {

    const [age,setAge]=useState(25)
    const [salary,setSalary]=useState(5000)


    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    const incrementSalry=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    
  return (


    <div>

            <Title />
            <Count  text={"age"} count={age} />
            <Button handleClick={incrementAge}>incrementAge</Button>
            <Count  text={"salary"}  count={salary}/>
            <Button handleClick={incrementSalry}>incrementSalry</Button>





    </div>
  )
}

export default ParentComponent