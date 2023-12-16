import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAction, listSelector } from './Reducerimpo';


const Count=()=>{

    const dispatch=useDispatch();
    const totalcount=useSelector(listSelector)

    function handlelike(){
        dispatch(listAction.increase())
    }
    function handledislike(){
        dispatch(listAction.decrease())
    }
    return (
        <>
            <div>{totalcount}</div>
            <button onClick={handlelike}>Like</button>
            <button onClick={handledislike}>Dislike</button>
        </>
  )
}

export default Count