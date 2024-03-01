import React from 'react'

import Hero from '../layout/sections/Hero';
import { Outlet } from 'react-router-dom';
import Card from '../layout/Card';
import Product from '../layout/sections/Product';


const Home = () => {

 

  return (
    <>
      <Hero/>
      <Product className='py-[10rem]'/>
    </>
  )
}

export default Home