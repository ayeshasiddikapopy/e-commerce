import React from 'react'

const Flex = ({children, className, onClick}) => {
  return (
    <div className={className} onClick={onClick}>{children}</div>
  )
}

export default Flex