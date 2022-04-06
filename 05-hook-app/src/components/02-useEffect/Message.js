import React, { useEffect,useState } from 'react'

export const Message = () => {
    const [cords, setCords] = useState({x:0,y:0})
    const {x,y} = cords
    useEffect(() => {
        const mouseMove = (e)=>{
               setCords({x:e.x,y:e.y})
        }

      window.addEventListener('mousemove',mouseMove);
    
      return () => {
       window.removeEventListener('mousemove',mouseMove)
      }
    }, [])
    
  return (
      <>
    <div>
        <h1>Hola</h1>
        <p>
            x:{x}
        </p>
        <p>
            y:{y}
        </p>
        </div>
        </>
  )
}
