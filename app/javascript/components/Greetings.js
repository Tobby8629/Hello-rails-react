import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { greetapi } from '../reducers/greetslice'

function Greetings() {
  const greet = useSelector((state)=> state.Greet.greetings)
  const dispatch = useDispatch()
  useEffect (()=>{
    dispatch(greetapi())
  }, [dispatch]) 
  // const greet = async () => {
  //   const res = await fetch("http://127.0.0.1:5000/api/v1/greetings")
  //   const data = res.json()
  //   console.log(data)
  //   return data
  // }
  // greet()

  return (
    <div className='ree'>
       <h1 style={{textTransform: 'uppercase',fontSize: '24px'}}>{greet.title}</h1>
    </div>
  )
}

export default Greetings