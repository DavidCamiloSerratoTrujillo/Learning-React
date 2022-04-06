import React,{memo} from 'react'

export const Small = memo(({value}) => {
    console.log("Me llame")
  return (
    <small>{value}</small>
  )
})
