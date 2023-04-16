import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import Link from 'next/link';
const Getincard = () => {
  return (
   <>
   <Link href="/contact" > 
   <div className="  card max-w-[650px] py-[60px] px-[36px] bg-white border-0 shadow-xl rounded-2xl divide-white ">
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
      </Link>
   </>
  )
}

export default Getincard