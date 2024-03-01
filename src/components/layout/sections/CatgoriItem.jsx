import React from 'react'
import CategoriHeading from '../CategoriHeading'
import { category, color, brands, prices } from '../../data/data.jsx'


const CatgoriItem = () => {
  return (

    <>
        <CategoriHeading title='Shop by Category' dropdown={true} data={category}/>
        <CategoriHeading title='Shop by color' dropdown={false} data={color} />
        <CategoriHeading title='Brands'  dropdown={false} data={brands} />
        <CategoriHeading title='Prices' dropdown={true} data={prices}/>
    </>
  )
}

export default CatgoriItem