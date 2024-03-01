import React, { useState } from 'react'
import Flex from './Flex'
import { GoPlus } from "react-icons/go";
import CategoriSubDrop from './CategoriSubDrop'

const CategoriDropItem = ({categoriName, subdropdown,children, color}) => {
  let [show, setShow] = useState(false)
  let [dropDown, setDropdown] = useState(subdropdown)
  return (
     <>  
     {dropDown
     ? 
     <Flex className='flex justify-between items-center p-3 ml-2 border-b border-primary cursor-pointer ' onClick={()=>setShow(!show)}>
         <p className='font-roboto font-semibold text-md '>
            {/* <span className='h-[10px] w-[10px] rounded-[50%] inline-block mr-2.5' style={{background:color}}></span> */}
            {categoriName}
          </p>
         <GoPlus/>
     </Flex>
     :
     <h2 className='font-roboto font-semibold text-md p-3 border-b border-primary cursor-pointer ml-2'>
      
        { color &&
        <span className='h-[10px] w-[10px] rounded-[50%] inline-block mr-2.5' style={{background:color}}></span>
        }
        
        {categoriName}
      </h2>
     }
     {show && (
         <>
            {children}            
         </>
         )
     }
     </>
  )
}

export default CategoriDropItem