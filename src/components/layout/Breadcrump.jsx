import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrump = ({title}) => {

    // console.log(window.location.pathname.split("/")['1'])
  return (
    <>

        <div className='py-[64px]'>
            <h2 className='text-[64px] font-roboto font-semibold capitalize'>{title}</h2>
        </div>
        <div className='flex items-center pb-4'>
            <Link to='/'><p>home</p></Link>
            <IoIosArrowForward className='text-sm mx-1'/>
            <p>{window.location.pathname.split("/")['1']}</p>
        </div>
    </>
  )
}
export default Breadcrump 