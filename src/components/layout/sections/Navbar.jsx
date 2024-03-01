import React , { useEffect, useState }from 'react'

import Logo from '../Logo'
import { FaBars } from "react-icons/fa6";
import AllList from '../AllList';
import Flex from '../Flex';

const Navbar = () => {
    let [show, setShow] = useState(true)
    let [bar, setBar] = useState(false)
  
    //navbar-->>
    useEffect(()=>{
  
      let resizeWindow = (e) => {
  
        if(window.innerWidth < 768){
          setShow(false)
          setBar(true)
        }else{
          setShow(true)
          setBar(false)
        }
      }
       
      resizeWindow()
      window.addEventListener("resize", resizeWindow)
      
    },[])
  
  
  return (
    <>
    <div className="max-w-container px-2.5 mx-auto my-2.5 lg:my-0 md:my-0 xl:my-0">
        <Flex className='lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center '>
            <div className='w-1/6'>
                <Logo/>
            </div>
            {bar &&
              <div className='lg:w-5/6 absolute top-2.5 right-2.5 md:w-5/6 '>
                  <FaBars onClick={()=> setShow(!show)} className='ms-auto'/>
              </div>
            }
            {show &&
              <div className='w-4/6 sm:w-full'>
                  <AllList/>
              </div>
            }
        </Flex>
    </div>
    
    </>
  )
}

export default Navbar