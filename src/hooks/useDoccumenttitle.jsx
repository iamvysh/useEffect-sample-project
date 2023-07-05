import {useEffect} from 'react'

const useDoccumenttitle = (count) => {

    useEffect(()=>{
        document.title=`count ${count}`

    },[count])
 
}

export default useDoccumenttitle