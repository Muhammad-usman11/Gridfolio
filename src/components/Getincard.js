import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
const Getincard = () => {
  return (
   <>
   <div className="  card max-w-[600px] py-[35px] px-[25px] bg-[#FFFFFF] rounded-[24px] ">
        <div className="cardbody">
          
          <h1 className=" mt-[60px] font-bold text-[28px] text-black ">
          Let's work together ✨
          </h1>
          <div className="content justify-between  flex items-center ">
            <p className=" text-[#F1B43E]  text-[20px] sm:text-[56px] font-bold ">
              Get in touch now 
            </p>
            <div className="arrow text-[40px] text-gray-300 ">
              <FiArrowRightCircle />
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Getincard