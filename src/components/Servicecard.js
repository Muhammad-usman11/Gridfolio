import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import { MdAssessment, MdLoyalty, MdViewQuilt } from "react-icons/md";

const Servicecard = () => {
  return (
   <>
   
   <div className="  card max-w-[650px] py-[36px] px-[36px] bg-white border-0 shadow-xl rounded-2xl divide-white ">
        <div className="cardbody">
          <p className=' mt-[50px] uppercase text-[16px] font-bold text-[#727272] ' >what i do</p>
          <div className="content lg:flex-nowrap flex-wrap justify-between mt-[20px] flex items-center ">
           <div className="first lg:w-[15%] w-[100%]">
            <div className=' text-[80px] text-[#F1B43E] ' >
            <MdAssessment/>
            </div>
            <p className=' text-[22px]  font-bold capitalize text-[#727272] mt-[30px] ' >web</p>
           </div>
           <div className="first lg:w-[15%] w-[100%]">
           <div className=' text-[80px] text-[#F1B43E] '>
            <MdLoyalty/>
            </div>
            <p className=' text-[22px] font-bold capitalize text-[#727272] mt-[30px] '>viusal</p>
           </div>
           <div className="first lg:w-[15%] ]">
           <div className=' text-[80px] text-[#F1B43E] '>
            <MdViewQuilt/>
            </div>
            <p className=' text-[22px] font-bold capitalize text-[#727272] mt-[30px] '>branding</p>
           </div>
           <div className="first lg:w-[15%]  text-[40px] text-gray-300 ">
            <FiArrowRightCircle/>
           </div>
          </div>
        </div>
      </div>

   
   </>
  )
}

export default Servicecard