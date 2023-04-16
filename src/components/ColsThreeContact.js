import React from "react";
import { FaPenNib, FaBox } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";

const ColsThreeContact = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-3 sm:grid-cols-2 py-20">
        <div className="bg-white border-0 shadow-xl divide-white rounded-2xl ">
          <div className="px-6 pt-[40px] pb-[4rem] sm:px-12 sm:mt-0 sm:pt-6 sm:pb-12">
            <span className="text-[#f1b43e] text-[5.5rem]">
              <MdCreditCard />
            </span>
            <h1 className=" text-[22px] sm:text-[24px]  my-6 text-[#727272] font-bold tracking-[-1.5px]">
              Website design & development
            </h1>
            <p className="text-[18px] sm:text-[20px] font-medium text-[#727272] tracking-[-1.2px] leading-[1.2em]">
              Experienced designer & visual developer. I love using tools like
              Figma and Framer.
            </p>
          </div>
        </div>

        <div className="bg-white border-0 shadow-xl divide-white rounded-2xl ">
          <div className="px-6 pt-[50px] pb-[4rem] sm:px-12 sm:mt-0 sm:py-10">
            <span className="text-[#f1b43e] pt-[20px] text-[4.25rem]">
              <FaPenNib />
            </span>

            <h1 className="text-[22px] sm:text-[24px] my-6 text-[#727272] font-bold tracking-[-1.5px]">
              Visual & graphic design
            </h1>
            <p className="text-[18px] sm:text-[20px] font-medium text-[#727272] tracking-[-1.2px] leading-[1.2em]">
              Eye for the visual side of things. I enjoy crafting beautiful
              illustrations and animations!
            </p>
          </div>
        </div>

        <div className="bg-white border-0 shadow-xl divide-white rounded-2xl ">
          <div className="px-6 py-3 sm:px-12 pt-[50px] pb-[4rem] sm:mt-0 sm:py-10">
            <span className="text-[#f1b43e] mt-[10px] text-[4.25rem]">
              <FaBox />
            </span>
            <h1 className="text-[22px] sm:text-[24px] my-6 text-[#727272] font-bold tracking-[-1.5px]">
              Branding
            </h1>
            <p className="text-[18px] sm:text-[20px] font-medium text-[#727272] tracking-[-1.2px] leading-[1.2em]">
              Combining both my visual and analytical side, I love creating
              brands that not only look great, but sell as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColsThreeContact;
