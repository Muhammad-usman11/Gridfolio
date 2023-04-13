import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
const Cardy = () => {
  return (
    <>
    <div className="  card max-w-[360px] p-[30px]  bg-[#FFFFFF] rounded-[24px] ">
        <div className="cardbody">
          <img className=" max-w-[100px] " src="/images/team1.png" alt="" />
          <p className=" mt-[35px] uppercase font-medium text-[16px] text-[#727272]  ">
          Learn more about me
          </p>
          <div className="content justify-between mt-[20px] flex items-center ">
            <h1 className=" text-black max-w-[108px] text-[28px] font-bold  ">
            See my resume
            </h1>
            <div className="arrow text-[40px] text-gray-300 ">
              <FiArrowRightCircle />
            </div>
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Cardy