import React from 'react'

const Listitem = ({itemName , className}) => {
  return (
    <li className={className}>{itemName}</li>
  )
}

export default Listitem