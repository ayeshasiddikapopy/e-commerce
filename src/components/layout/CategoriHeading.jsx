import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Flex from './Flex';
import CategoriDropItem from './CategoriDropItem';
import CategoriSubDrop from './CategoriSubDrop';

const CategoriHeading = ({title, dropdown, data}) => {
    let [show, setShow] = useState(dropdown)
    let [dropDown, setDropdown] = useState(dropdown)
 
    return (
    <>  
    {dropDown
    ? 
    <Flex className='flex justify-between items-center p-3 border-b border-primary cursor-pointer bg-primary my-3' onClick={()=>setShow(!show)}>
        <h2 className='font-roboto font-bold text-lg text-white'>{title}</h2>
        <IoIosArrowDown className='text-white'/>
    </Flex>
    :
    <h2 className='font-roboto font-bold text-lg p-3 border-b border-primary cursor-pointer bg-primary text-white my-3'>{title}</h2>
    }
    {show && (
        <>
            {
              data.map((item,index)=>(
                     <CategoriDropItem categoriName={item.name} subdropdown={item.subcategory ? true : false} >
                        {
                            item.subcategory &&
                            item.subcategory.map((subItems)=>( 
                                <CategoriSubDrop title= {subItems.name} />
                            ))
                        }
                    </CategoriDropItem>
                ))
            }                     
        </>
        )
    }
    {!dropDown &&
    (
        <>
        {
            data.map((item)=>(
                <CategoriDropItem categoriName={item.name} subdropdown={false} color={item.code} />
            ))
        }

        </>
        )
    }
    </>
  )
}

export default CategoriHeading