import React, { useRef } from 'react'
import '../../components/02-useEffect/effects.css'
export const FocusScream = () => {
    const inputRef = useRef(null);

    const handleClick = ()=>{
      inputRef.current.select();
    }
   
  return (
    <div>
        <h1>Focus Screen</h1>
        <hr/>
        <input ref={inputRef} className='form-control' placeholder='Su Nombre'/>
    <button 
            className='btn btn-outline-primary mt-3'
            onClick={handleClick}
            >Focus</button>
    </div>
  )
}
