import React from 'react'

const Images = ({src}) => {
  return (
        <picture>
          <img src={src} alt="Images" className='w-full h-full' />
        </picture>
  )
}

export default Images