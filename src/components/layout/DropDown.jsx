import React from 'react'

const DropDown = ({children, className, onClick, title, dropref}) => {
  return (
    <div onClick={onClick} title={title} className={className} ref={dropref} >
        {children}
    </div>
  )
}

export default DropDown