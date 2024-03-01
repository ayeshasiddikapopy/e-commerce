import React from 'react'
import Lists from './Lists'
import Listitem from './Listitem'
import { Link } from 'react-router-dom'

const AllList = () => {
  return (
    <>
      <Lists className='lg:flex lg:justify-end lg:gap-x-10 m-2.5 md:flex md:justify-end md:gap-x-10'>
          <Link to='/'><Listitem className='' itemName='Home'/></Link>
          <Link to='/product'><Listitem className='' itemName='Product'/></Link>
          <Link to='/service'><Listitem className='' itemName='Service'/></Link>
          <Link to='/contact'><Listitem className='' itemName='Contact'/></Link>
      </Lists>   
    </>
  )
}

export default AllList;