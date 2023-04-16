import React from 'react'
import { CiLinkedin, CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { AiFillDribbbleCircle } from "react-icons/ai";
import Link from 'next/link'
const Footer = () => {
  return (
    <>
    <div className="footersec  py-[80px] bg-[#FCFAF4] ">
        <div className="  flex lg:flex-nowrap flex-wrap justify-center lg:gap-[60px] gap-[20px] ">
            <div className="logo    text-[30px] font-bold ">
                <h1>GRIDFOLIO</h1>
            </div>
            <div className="tabs  text-[18px] text-[#727272] font-semibold flex items-center lg:gap-[40px] gap-[25px] ">
                 <Link href="/" >  <p className="no-underline hover:text-[#F1B43E] hover:underline " >Home</p> </Link>
                 <Link href="/works"> <p className= "no-underline hover:text-[#F1B43E] hover:underline">Work</p> </Link>
                 <Link href="/about"> <p className= "no-underline hover:text-[#F1B43E] hover:underline">About</p> </Link>
                 <Link href="/contact"> <p className=" no-underline hover:text-[#F1B43E] hover:underline">Contact</p> </Link>
            </div>
        </div>
        <div className="socialmedia lg:px-0 px-[25px] ">
            <div className="icons mt-[40px] justify-center flex items-center  gap-[30px] text-[50px] text-gray-400 ">
                <Link href="" >    <CiLinkedin /> </Link>
                <Link href="" >  <CiTwitter/> </Link>
                <Link href="" >  <AiFillDribbbleCircle/> </Link>
                <Link href="" >  <CiFacebook/> </Link>
                <Link href="" >  <CiInstagram/> </Link>
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