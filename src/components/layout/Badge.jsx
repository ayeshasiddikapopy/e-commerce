import React from 'react'
import { Link } from 'react-router-dom'

const Badge = ({className,title}) => {
  return (
    
    <div className={className}>
        <Link className='bg-primary p-4 rounded-xl'>{title}</Link>
    </div>
    
  )
}

export default Badge