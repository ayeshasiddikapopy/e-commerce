import React from 'react'

const Button = ({children, onClick,ref}) => {
  return (
    <button type='button' onClick={onClick} ref={ref} className='bg-secondary py-2 lg:px-8 sm:px-4 px-3 rounded-xl text-being lg:text-[16px] sm:text-[12px] ' >{children}</button>
  )
}

export default Button