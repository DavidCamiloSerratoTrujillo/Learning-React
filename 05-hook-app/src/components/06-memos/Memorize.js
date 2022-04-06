import React,{useState} from 'react'
import {useCounter} from '../01-useState/hooks/useCounter'
import { Small } from './Small';
import '../02-useEffect/effects.css'
export const Memorize = () => {
  const {counter,increment} = useCounter(10);
  const [show, setShow] = useState(true)
  return (
    <div>

        <h1>Counter: <Small value = {counter}/></h1>
        <button className='btn btn-primary m-3'
          onClick={increment}>+</button>
           <button className='btn btn-outline-primary ml-3'
          onClick={()=>{setShow(!show)}}>Show/Hide{JSON.stringify(show)}</button>
    </div>
  )
}
