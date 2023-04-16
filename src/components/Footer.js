import React from 'react'
import { CiLinkedin, CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { AiFillDribbbleCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
    <div className="footersec mt-10 py-[20px] ">
        <div className="  flex lg:flex-nowrap flex-wrap justify-center lg:gap-[60px] gap-[20px] ">
            <div className="logo    text-[30px] font-bold ">
                <h1>GRIDFOLIO</h1>
            </div>
            <div className="tabs  text-[18px] text-[#727272] font-semibold flex items-center lg:gap-[40px] gap-[25px] ">
                <p>Home</p>
                <p>Work</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
        <div className="socialmedia lg:px-0 px-[25px] ">
            <div className="icons mt-[40px] justify-center flex items-center  gap-[30px] text-[50px] text-gray-400 ">
                <CiLinkedin />
                <CiTwitter/>
                <AiFillDribbbleCircle/>
                <CiFacebook/>
                <CiInstagram/>
            </div>
        </div>
        <div className="last lg:flex-nowrap flex-wrap lg:text-left text-center  mt-[40px] text-[18px] text-[#727272] font-semibold flex justify-center lg:gap-[30px] gap-[10px]  ">
            <p className=' lg:w-[11%] w-[100%] '  >© 2022 Gridfolio</p>
            <p className=' lg:w-[11%] w-[100%] '>Matteo Tiscia</p>
            <p className=' lg:w-[11%] w-[100%] '>Made in Framer</p>
        </div>
    </div>
    
    </>
  )
}

export default Footer