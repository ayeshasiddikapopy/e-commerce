import React, { useState } from 'react'
import Flex from './Flex'
import { GoPlus } from "react-icons/go";

const CategoriSubDrop = ({subdropdown,title}) => {
    let [show, setShow] = useState(false)
    let [dropDown, setDropdown] = useState(subdropdown)
    return (
       <>  
       {dropDown
       ? 
       <Flex className='flex justify-between items-center p-3 ml-2 border-b border-primary cursor-pointer ' onClick={()=>setShow(!show)}>
           <p className='font-roboto font-regular text-md '>{title}</p>
           <GoPlus/>
       </Flex>
       :
       <h2 className='font-roboto font-regular text-md p-3 border-b border-primary cursor-pointer ml-2'>{title}</h2>
       }
       {show && (
           <>
               <p className='font-roboto font-regular text-md p-3 border-b border-primary cursor-pointer ml-4'>subdrops item</p>         
           </>
           )
       }
       </>
    )
}

export default CategoriSubDrop