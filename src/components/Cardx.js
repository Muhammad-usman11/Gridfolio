import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
const Cardx = () => {
  return (
    <>
      <div className=" cardx bg-white border-0 shadow-xl rounded-2xl divide-white mt-5 sm:mt-0  ">
            <div className="px-9 py-9">
            <img className=" max-w-[100px] " src="/images/team1.png" alt="" />
            <h1 className=" mt-[35px] font-bold  text-[22px] sm:text-[40px] text-black ">
              Hey, I'm Andrew 👋
            </h1>
            <div className="content justify-between mt-[20px] flex items-center ">
              <p className=" lg:max-w-[360px] max-w-[170px]  text-[#727272] text-[17px] sm:text-[22px] font-medium  ">
                A senior UX Designer at Revolution
              </p>
              <div className="arrow text-[40px] text-gray-300 hover:text-[#F1B43E] ">
                <FiArrowRightCircle />
              </div>
            </div>
            </div>
          </div>
    </>
  );
};

export default Cardx;
