import React, { useState } from 'react'
import Buttons from '../buttons';
import Flex from '../Flex';
import { RiBarChartHorizontalFill } from "react-icons/ri"
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Hero = () => {

    let [dotActive, setDotActive] = useState(0)

    let SampleNextArrow = ({ className, style, onClick}) => {
        return (
                <div
                className={className}
                style={{ ...style,
                display: "flex",
                background: "#B99470",
                zIndex:'99999' , 
                position:'absolute',
                top:'50%', 
                left:'2%',
                height:'40px',
                width:'40px',
                borderRadius:'50%',
                justifyContent:'center',
                alignItems:'center',
                color:'white'
            }}
                onClick={onClick}
                >< IoIosArrowBack/></div>
            );
    } 

    let SamplePrevArrow = ({ className, style, onClick}) => {
        return (
                <div
                className={className}
                style={{ ...style,
                display: "flex",
                background: "#B99470",
                zIndex:'99999' , 
                position:'absolute',
                top:'50%', 
                right:'2%',
                height:'40px',
                width:'40px',
                borderRadius:'50%',
                justifyContent:'center',
                alignItems:'center',
                color:'white'
            }}
                onClick={onClick}
                >< IoIosArrowForward/></div>
            );
    } 


  

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
 
        beforeChange: (prev, next) => {
            setDotActive(next );
          },
        appendDots: dots => (
            <div
              style={{
               position:'absolute',
               bottom:'10%',
               left:'50%',
               translate:'-50%'
              }}
            >
              <ul style={{ 
                margin:'0',
                display:'flex',
                textAlign:'center'
               }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === dotActive 
                    ?
                    {
                        width: "50px",
                        color: "#B99470",
                        borderBottom: "5px #B99470 solid",
                    }
        
                    :
                    { 
                        width: "50px",
                        color: "rgba(95, 111, 82, 0.608)",
                        paddingBottom:'15px',
                        borderBottom: "5px #FEFAE0 solid",
                        transition:'ease-in 0.4s',
                      
                    }
              }
            >
              0{i + 1}
            </div>
          )
      };

  return (
    <>
        <div className=''>
        <Slider {...settings}>
           
            <div className="hero bg-[url('./assets/img-4_2000x.webp')] bg-cover bg-center bg-no-repeat h-full w-full overflow-hidden">
                <div className="hero__Overlay relative h-full w-full bg-[#5f6f5252] ease-in ">
                    <div className="max-w-container mx-auto">
                        <div className="conntents lg:py-[180px] py-3 text-center">
                            <h2 className='text-being text-[15px] lg:text-[40px] font-roboto font-semibold'>Tattos here </h2>
                            <p className='text-being text-[8px] lg:text-[16px] font-sans font-normal py-2.5 w-2/6 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur eveniet corrupti, repudiandae quisquam nam.</p>
                            <Flex className='py-6 '> 
                                <Buttons className='px-8 py-2 bg-secondary text-being border border-solid border-being rounded-tr-[20px] hover:bg-[#404a38] transition'>Click</Buttons>
                                <Buttons className='px-8 py-2 bg-secondary text-being border border-solid border-being ml-3 rounded-tr-[20px] hover:bg-[#404a38] transition'>Order</Buttons>
                            </Flex>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="hero  bg-[url('./assets/breadcrumb_bg_image.jpg')] bg-cover bg-center bg-no-repeat h-full w-full overflow-hidden">
                <div className="hero__Overlay relative h-full w-full bg-[#5f6f5252] ease-in">
                    <div className="max-w-container mx-auto">
                        <div className="conntents lg:py-[180px] py-3 text-center">
                            <h2 className='text-being text-[15px] lg:text-[40px] font-roboto font-semibold'>Tattos here </h2>
                            <p className='text-being text-[8px] lg:text-[16px] font-sans font-normal py-2.5 w-2/6 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur eveniet corrupti, repudiandae quisquam nam.</p>
                            <Flex className='py-6 '> 
                                <Buttons className='px-8 py-2 bg-secondary text-being border border-solid border-being rounded-tr-[20px] hover:bg-[#404a38] transition'>Click</Buttons>
                                <Buttons className='px-8 py-2 bg-secondary text-being border border-solid border-being ml-3 rounded-tr-[20px] hover:bg-[#404a38] transition'>Order</Buttons>
                            </Flex>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero  bg-[url('./assets/img-3_930x.webp')] bg-cover bg-center bg-no-repeat h-full w-full overflow-hidden">
                <div className="hero__Overlay relative h-full w-full bg-[#5f6f5252] ease-in">
                    <div className="max-w-container mx-auto">
                        <div className="conntents lg:py-[180px] py-3 text-center">
                            <h2 className='text-being text-[15px] lg:text-[40px] font-roboto font-semibold'>Tattos here </h2>
                            <p className='text-being text-[8px] lg:text-[16px] font-sans font-normal py-2.5 w-2/6 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur eveniet corrupti, repudiandae quisquam nam.</p>
                            <Flex className='py-6 '> 
                                <Buttons className='px-8 py-2 bg-secondary text-being border border-solid border-being rounded-tr-[20px] hover:bg-[#404a38] transition'>Click</Buttons>
                                <Buttons className='px-8 py-2 bg-secondary text-being border border-solid border-being ml-3 rounded-tr-[20px] hover:bg-[#404a38] transition'>Order</Buttons>
                            </Flex>
                        </div>
                    </div>
                   
                </div>
            </div>
        </Slider>
      </div>
    </>
  )
}

export default Hero