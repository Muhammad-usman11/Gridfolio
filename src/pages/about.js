import React from "react";
import { FaTwitter, FaRegArrowAltCircleRight } from "react-icons/fa";
import { TbScan } from "react-icons/tb";
const about = () => {
  return (
    <div>
      <div className="bg-[#FCFAF4]">
        <div className="wrapper">
          <h1 className="about_me  text-[#edece8] font-semibold tracking-[-0.05em]">
            About Me
          </h1>
          <div className="grid grid-cols-1 sm:mb-8 sm:gap-5 sm:grid-cols-4 ">
            <div className="col-span-3">
              <img
                className="border-0 shadow-xl h-[100%] rounded-2xl aboutImg"
                src="https://i.ibb.co/hFHjtQy/1681041135105.jpg"
                alt=""
              />
            </div>
            <div className="bg-white border-0 min-w-[300px] shadow-xl mt-5 sm:mt-0 divide-white rounded-2xl">
              <div className="px-9 py-9">
                <h1 className="pt-12 text-[28px] sm:text-[50px] font-bold tracking-[-2px] leading-[1.4em] text-[#323232]">
                  Hey, I'm Andrew 👋{" "}
                </h1>
                <p className="text-[19px] mt-3 sm:text-[26px] font-medium tracking-[-1.5px] leading-[1.3em] text-[#727272]">
                  Design Lead at Revolution
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 ">
            <div className="bg-white border-0 mt-5 sm:mt-0 shadow-xl px-7 py-7 sm:px-10 sm:py-12  divide-white rounded-2xl">
              <div>
                <h1 className="text-[28px] pt-[2rem] sm:pt-[5rem] font-bold tracking-[-2px] text-[#323232]">
                  About me
                </h1>
                <p className="text-[20px] sm:text-[22px] mt-3 font-medium leading-[1.2em] tracking-[-1.2px] text-[#727272]">
                  I’m a product designer based in Sydney specialising in web
                  design, illustration and visual development. I have worked in
                  multidisciplinary fields, in both large and small companies,
                  startups and as a freelancer.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="bg-white border-0 shadow-xl px-7 py-7 sm:px-10 sm:py-12  divide-white rounded-2xl">
              <h1 className="text-[28px] pt-[5rem] font-bold tracking-[-2px] text-[#323232]">
                Experience
              </h1>
              <div className="flex gap-[6px] sm:gap-5 items-center">
                <p className="text-[18px] sm:text-[26px]  mt-3 font-medium  tracking-[-1.5px] text-[#727272]">
                  Revolution
                </p>
                <p className="text-[#DCDCDC] line mt-[15px] border-[grey-900] border-b"></p>
                <p className="sm:text-[26px]  mt-3 font-medium  tracking-[-1.5px] text-[#727272]">
                  Design Lead
                </p>
                <p className="text-[14px] sm:text-[22px]  mt-3 font-medium  tracking-[-1.5px] text-[#aeaeae]">
                  2019 -
                </p>
              </div>
              {/*  */}
              <div className="flex gap-[6px] sm:gap-5 items-center">
                <p className="text-[16px] sm:text-[26px]  mt-3 font-medium  tracking-[-1.5px] text-[#727272]">
                  Circle
                </p>
                <p className="text-[#DCDCDC] line mt-[15px] border-[grey-900]  border-b"></p>
                <p className="sm:text-[26px]  mt-3 font-medium  tracking-[-1.5px] text-[#727272]">
                  UX Designer
                </p>
                <p className="text-[14px] sm:text-[22px]  mt-3 font-medium  tracking-[-1.5px] text-[#aeaeae]">
                  2015 - 2019
                </p>
              </div>
              {/*  */}
              <div className="flex gap-[6px] sm:gap-5 items-center">
                <p className="text-[18px] sm:text-[26px]  mt-3 font-medium  tracking-[-1.5px] text-[#727272]">
                  360degree
                </p>
                <p className="text-[#DCDCDC] line mt-[15px] border-[grey-900]  border-b"></p>
                <p className="sm:text-[26px]  mt-3 font-medium  tracking-[-1.5px] text-[#727272]">
                  Designer
                </p>
                <p className="text-[14px] sm:text-[22px]  mt-3 font-medium  tracking-[-1.5px] text-[#aeaeae]">
                  2012 - 2015
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 pb-20 sm:grid-cols-4 sm:gap-5 my-7">
            <a href="#">
              <div className="bg-white border-0 shadow-xl rounded-2xl divide-white mt-5 sm:mt-0  ">
                <div className="flex">
                  <div className="text-[130px] ml-[90px]  py-20 m-auto text-[#f1b43e]">
                    <FaTwitter />
                  </div>

                  <div className="text-[#DCDCDC] mb-[40px] mr-[30px] self-end rotate-[312deg] text-4xl">
                    <FaRegArrowAltCircleRight />
                  </div>
                </div>
              </div>
            </a>

            <div className="bg-white border-0 col-span-2 shadow-xl rounded-2xl divide-white mt-5 sm:mt-0  ">
              <div className="px-9 py-9">
                <h1 className="pt-[20px] sm:pt-[100px] text-[28px] sm:text-[28px] font-bold tracking-[-2px] leading-[1.2em] text-[#323232]">
                  Let's work together ✨{" "}
                </h1>
                <div className="flex justify-between items-center">
                  <p className="text-[40px] mt-3 sm:text-[56px] font-bold tracking-[-4px] leading-[1.3em] text-[#f1b43e]">
                    Get in touch now
                  </p>
                  <span className="text-[#DCDCDC] mt-[75px] sm:mt-[15px] text-4xl">
                    <FaRegArrowAltCircleRight />
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border-0 shadow-xl rounded-2xl divide-white mt-5 sm:mt-0  ">
              <div className="px-9 pt-16 sm:pt-20">
                <span className="text-[70px]   text-[#f1b43e]">
                  <TbScan />
                </span>
                <p className="text-[14px] mt-3 sm:text-[14px] font-medium tracking-[-1px] leading-[1.2em] text-[#727272]">
                  LEARN MORE ABOUT ME
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[28px] mt-3 pb-7 font-bold tracking-[-2px] leading-[1.2em] text-[#323232]">
                    See my resume
                  </p>
                  <span className="text-[#DCDCDC] mb-[40px] sm:mb-0  text-4xl">
                    <FaRegArrowAltCircleRight />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default about;
