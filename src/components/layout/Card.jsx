import React, { useRef } from 'react'
import Images from './Images'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Buttons from './buttons'
import Container from './Container'
import Badge from './Badge'
import Button from '../Button'


const Card = ({badge, children}) => {
  let btnref = useRef()

  let handlebtn = () => {
    btnref.current.style.color= "red"

  }

  return (
    <>
        <div className='lg:w-[30%] xl:w-[30%] md:w-[30%] sm:w-[30%] w-[48%] lg:mb-8 p-4 shadow-sm shadow-primary hover:shadow-primary hover:shadow-xl ease-linear relative'>
          <div className='w-full lg:h-[300px] h-[200px] bg-[#A9B388] rounded-md'>
            {/* <Images src='./src/assets/Product-12_350X.png'/> */}
            {children}
          </div>
            <div className='card__content py-4'>
              <Flex className='flex justify-between py-2.5'>
                <p className='font-roboto lg:text-lg text-sm font-semibold capitalize'>new tatto</p>
                <Link>
                  $44
                </Link>
              </Flex>
              <div className='flex justify-between '>
                {/* <Buttons className='bg-secondary py-2 lg:px-8 sm:px-4 px-3 rounded-xl text-being lg:text-[16px] sm:text-[12px] ' ref={btnref} onClick={handlebtn}><Link>Buy</Link></Buttons> */}
                <button ref={btnref} onClick={handlebtn} ><Link>uy</Link></button>
              
                <Buttons className='bg-secondary py-2 lg:px-8 sm:px-4 px-3 rounded-xl text-being lg:text-[16px] sm:text-[12px] '><Link>Details</Link></Buttons> 
              </div>
            </div>
            {badge &&
              <Badge className='absolute top-[2.5rem] left-[1.5rem] text-being' title='-40%'/>
            }
        </div>
    </>
  )
}

export default Card