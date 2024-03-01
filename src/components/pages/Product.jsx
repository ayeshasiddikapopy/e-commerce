import React, { useEffect, useRef, useState } from 'react'
import Breadcrump from '../layout/Breadcrump'
import Container from '../layout/Container'
import Flex from '../layout/Flex'
import Card from './../layout/Card';
import Images from '../layout/Images';
import CatgoriItem from '../layout/sections/CatgoriItem';
import { BsFilterRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Product = () => {
  let [show, setShow] = useState(false)
  let [filterShow, setFilterShow] = useState(false)
  // let productref = useRef(null)

  //resizing windows
  useEffect(()=>{
    let resizeProduct = (e) => {
      if(window.innerWidth < 768) {
        setShow(false)
        setFilterShow(true)
      }
      else{
        setShow(true)
        setFilterShow(false)
      }
    }
    resizeProduct()
    window.addEventListener('resize', resizeProduct)
  },[])

  //category filter buttons
  let handlefilter = () =>{
    setShow(!show)
  }
 //use ref has been used but anywhere on onclick it gets disapear , i mean any clicks like category section also
  // useEffect(()=>{

  //   let handleDropOutside = (e) => {

  //     if(productref.current && !productref.current.contains(e.target)){
  //         setShow(false)
  //         console.log('ki', e.target)
  //     }
  // }

  //   document.addEventListener("click", handleDropOutside)
    
  //   return ()=>{
  //       document.removeEventListener("click", handleDropOutside)
  //   }
  // },[])

  return (
    <>
    <Container classname='max-w-container mx-auto'>
      <Breadcrump title='product' />
      {filterShow &&
      <div className='flex justify-between p-4' >
        <BsFilterRight onClick={handlefilter} />
        <RxCross2 onClick={()=>setShow(false)}/>
      </div>
      }
      <Flex className='lg:flex lg:justify-between relative md:flex md:justify-between'>
          {show &&
          <div className='lg:w-[27%] md:w-[27%] xl:w-[27%] bg-white shadow-sm shadow-primary px-2.5 sm:w-[50%] ' >
              <CatgoriItem/>
          </div>
          }

          <div className='lg:w-[70%] md:w-[70%] xl:w-[70%] w-full'>
            <Flex className='flex items-center justify-between flex-wrap'>
              <Card badge={true}>
                <Images src='./src/assets/Product-12_350X.png'/>
              </Card>
              <Card badge={true}>
                <Images src='./src/assets/Product-16_350X.png'/>
              </Card>
              <Card badge={true}>
                <Images src='./src/assets/Product-3_large.png'/>
              </Card>
              <Card badge={true}>
                <Images src='./src/assets/Product-12_350X.png'/>
              </Card>
              <Card badge={false}>
                <Images src='./src/assets/Product-3_large.png'/>
              </Card>
              <Card badge={true}>
                <Images src='./src/assets/Product-16_350X.png'/>
              </Card>
              <Card badge={true}>
                <Images src='./src/assets/Product-12_350X.png'/>
              </Card>
              
            </Flex>
          </div>
      </Flex>
    </Container>
    </>
  )
}

export default Product