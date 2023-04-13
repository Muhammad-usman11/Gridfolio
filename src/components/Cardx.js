import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
const Cardx = () => {
  return (
    <>
      <div className=" m-auto card max-w-[600px] py-[35px] px-[25px] bg-[#FFFFFF] rounded-[24px] ">
        <div className="cardbody">
          <img className=" max-w-[100px] " src="/images/team1.png" alt="" />
          <h1 className=" mt-[35px] font-bold text-[40px] text-black ">
            Hey, I'm Andrew 👋
          </h1>
          <div className="content justify-between mt-[20px] flex items-center ">
            <p className=" text-[#727272] text-[22px] font-medium  ">
              A senior UX Designer at Revolution
            </p>
            <div className="arrow text-[40px] text-gray-300 ">
              <FiArrowRightCircle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardx;
