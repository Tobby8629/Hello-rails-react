import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { greetapi } from '../reducers/greetslice'

function Greetings() {
  const greet = useSelector((state)=> state.Greet.greetings)
  const dispatch = useDispatch()
  useEffect (()=>{
    dispatch(greetapi())
  }, [dispatch]) 
 

  return (
    <div className='ree'>
       <h1 style={{textTransform: 'uppercase',fontSize: '24px'}}>{greet.title}</h1>
    </div>
  )
}

export default Greetings