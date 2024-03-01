import React from 'react'

const Buttons = ({children, className, ref, onClick}) => {
  return (
    <>
        <button type='button' className={className} ref={ref} onClick={onClick}>{children}</button>
    </>
  )
}

export default Buttons