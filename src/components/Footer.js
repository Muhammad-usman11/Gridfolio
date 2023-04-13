import React from 'react'
import { CiLinkedin, CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { AiFillDribbbleCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
    <div className="footersec mt-10 py-[20px] ">
        <div className="  flex justify-center gap-[60px] ">
            <div className="logo    text-[30px] font-bold ">
                <h1>GRIDFOLIO</h1>
            </div>
            <div className="tabs  text-[18px] text-[#727272] font-semibold flex items-center gap-[40px] ">
                <p>Home</p>
                <p>Work</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
        <div className="socialmedia">
            <div className="icons mt-[40px] justify-center flex items-center  gap-[30px] text-[50px] text-gray-400 ">
                <CiLinkedin />
                <CiTwitter/>
                <AiFillDribbbleCircle/>
                <CiFacebook/>
                <CiInstagram/>
            </div>
        </div>
        <div className="last  mt-[40px] text-[18px] text-[#727272] font-semibold flex justify-center gap-[30px]  ">
            <p  >© 2022 Gridfolio</p>
            <p>Matteo Tiscia</p>
            <p>Made in Framer</p>
        </div>
    </div>
    
    </>
  )
}

export default Footer