import React from 'react'
import Flex from './Flex';
import Images from './Images';
import { Link } from 'react-router-dom';
import Buttons from './buttons';



const Cart = ({className}) => {
  return (
    <>
        <div className={className}>
            <div className='w-4/6 mx-auto '>
                <Images src='./src/assets/Product-2_large.png'/>
            </div>
            <div className="py-2.5 text-center text-white">
                <p>Hand Tatto</p>
                <Link>price : 30$</Link>
            </div>
            <Flex className='flex mx-2.5 justify-between mt-2.5' >
                <Buttons className='px-4 py-2 bg-primary border border-secondary border-solid text-white rounded-xl'>Add to cart</Buttons>
                <Buttons className='px-4 py-2 bg-primary border border-secondary border-solid text-white rounded-xl'>check out</Buttons>
            </Flex>
        </div>
    </>
  )
}

export default Cart