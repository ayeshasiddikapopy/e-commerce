import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container';
import Flex from '../Flex';
import { RiBarChartHorizontalFill } from "react-icons/ri"
import { CiShoppingCart } from "react-icons/ci";
import DropDown from '../DropDown';
import Lists from '../Lists';
import Listitem from '../Listitem';
import Inputs from '../Inputs';
import Cart from '../Cart';



const Header = () => {

    let [show, setShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
    let dropref = useRef(null)
    let Cartref = useRef(null)
    let categoryRef = useRef(null)

    const handleDropdown = () => {
        setShow(!show); // Toggling the shows state // Setting shows to true when the div is clicked
        categoryRef.current.style.color= "#5F6F52" 
      };
      
    const handleCartDowwn =() => {
        setCartShow(!cartShow)
    }
      

    useEffect(()=>{
        
        let handleDropOutside = (e) => {
            if(dropref.current && !dropref.current.contains(e.target)){
                setShow(false) 
                categoryRef.current.style.color= "#fff" 
            }
        }
        let handleCartside = (e) => {
            if(Cartref.current && !Cartref.current.contains(e.target)){
                setCartShow(false)
            }
        }
        document.addEventListener("click", handleDropOutside)
        document.addEventListener("click", handleCartside)
        
        return ()=>{
            document.removeEventListener("click", handleDropOutside)
            document.removeEventListener("click", handleCartside)
        }
        
        // document.body.addEventListener('click', (e) =>{  //sirs code
            
        //     if(Cartref.current.contains(e.target)){
        //         setCartShow(true)
        //     }else{
        //         setCartShow(false)
        //     }
        // })
    },[])

 


  return (
    <>
        <div className='bg-primary w-full '>
            <Container classname=' '>
                <Flex className='flex justify-between items-center py-4 px-2.5'>
                    <DropDown onClick={handleDropdown} dropref={dropref} className=' relative '>
                        <p className='flex gap-x-2 items-center text-being' ref={categoryRef}> 
                            <RiBarChartHorizontalFill />
                            Category
                        </p>
                        {show &&
                        <Lists className='p-5 w-[300px] bg-primary absolute top-[30px] left-[1%] border-being border-solid border rounded-sm z-10 text-center'>
                            <Listitem itemName='Dropdown' className='text-white p-2 border-being border-solid border-b'/>
                            <Listitem itemName='dropdown' className='text-white p-2 border-being border-solid border-b'/>
                            <Listitem itemName='dropdown' className='text-white p-2 border-being border-solid border-b'/>
                        </Lists>
                        }
                    </DropDown>
                    <div className='w-3/5 rounded-3xl searce'>
                        <Inputs type='text' className='w-full p-2.5 rounded-3xl placeholder:text-slate-400' placeholder='Searce '/>
                    </div>
                    <div className='cart relative ' >
                        <DropDown dropref={Cartref} >
                            <CiShoppingCart  onClick={handleCartDowwn} className='text-being text-2xl'/>
                            {cartShow &&
                                <Cart className='p-5 w-[300px] bg-secondary absolute top-[30px] right-[1%] z-10'/>
                            }
                        </DropDown>
                    </div>
                </Flex>
            </Container>
        </div>
    
    </>
  )
}

export default Header