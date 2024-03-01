import React from 'react'
import Card from '../Card'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'

const Product = ({className}) => {
  return (
    <>
        <div className={className}>
            <Container>
                <Flex className='lg:flex lg:justify-between flex justify-between flex-wrap gap-y-[4rem]'>
                <Card badge={true}>
                  <Images src='./src/assets/Product-12_350X.png'/>
                </Card>
                <Card badge={true}>
                  <Images src='./src/assets/Product-12_350X.png'/>
                </Card>
                <Card badge={true}>
                  <Images src='./src/assets/Product-12_350X.png'/>
                </Card>
                <Card badge={true}>
                  <Images src='./src/assets/Product-12_350X.png'/>
                </Card>
                <Card badge={true}>
                  <Images src='./src/assets/Product-12_350X.png'/>
                </Card>
                <Card badge={true}>
                  <Images src='./src/assets/Product-12_350X.png'/>
                </Card>
                <Card badge={true}>
                  <Images src='./src/assets/Product-12_350X.png'/>
                </Card>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Product