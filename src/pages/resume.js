import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const resume = () => {
  return (
    <div>
      <div className="bg-[#FCFAF4]">
        <div className="wrapper">
          <div className="grid pb-[80px] sm:gap-x-[80px] pt-[90px] grid-cols-1 lg:grid-cols-[minmax(200px,_350px)_1fr_1fr]">
            <div className="flex flex-col gap-[10px]">
              <div className="bg-white mb-3 border-0 shadow-xl divide-white rounded-2xl">
                <div className="px-7 py-7 sm:px-10 sm:py-12">
                  <img
                    className="w-[45%] sm:w[100%]"
                    src="https://i.ibb.co/VYfbgJc/Ellipse-1-3.png"
                    alt=""
                  />
                  <h1 className="text-[#323232] pt-2 text-[28px] sm:text-[28px] font-bold tracking-[-1] sm:tracking-[-2px]">
                    Andrew Mallen
                  </h1>
                  <p className="text-[#f1b43e] py-2 text-[22px] sm:text-[26px] font-medium tracking-[-1px]">
                    Design Lead
                  </p>

                  <p className="text-[#727272] text-[17px] sm:text-[22px] font-medium tracking-[-0.2px]">
                    hello@andrew.com
                  </p>
                  <p className="text-[#727272] py-2 text-[17px] sm:text-[22px] font-medium tracking-[-0.2px]">
                    www.andrewmallen.com
                  </p>
                  <button className="text-[#727272] px-[14px] sm:px-[16px] mt-3  py-[8px] sm:py-[12px] font-bold tracking-[0.5px] text-[14px] sm:text-[16px] border  rounded-full border-black border-solid">
                    Contact Me
                  </button>
                </div>
              </div>
              {/* card 2 */}
              <div className="bg-white mt-2 border-0 shadow-xl divide-white rounded-2xl">
                <div className="px-10 py-12">
                  <div className="border-[grey-900] pb-4 border-b flex items-center justify-between ">
                    <div>
                      {" "}
                      <a href="">
                        <p className="text-[#727272]  font-bold tracking-[-1.2px] text-[20px] sm:text-[22px]">
                          LinkedIn
                        </p>
                      </a>
                    </div>

                    <div className="text-[#DCDCDC] rotate-[312deg] text-4xl">
                      <FaRegArrowAltCircleRight />
                    </div>
                  </div>

                  <div className="mt-6 border-[grey-900] pb-4 border-b flex items-center justify-between ">
                    <div>
                      {" "}
                      <a href="">
                        <p className="text-[#727272]  font-bold tracking-[-1.2px] text-[20px] sm:text-[22px]">
                          Twitter
                        </p>
                      </a>
                    </div>

                    <div className="text-[#DCDCDC] rotate-[312deg] text-4xl">
                      <FaRegArrowAltCircleRight />
                    </div>
                  </div>

                  <div className="mt-6 border-[grey-900] pb-4 border-b flex items-center justify-between ">
                    <div>
                      {" "}
                      <a href="">
                        <p className="text-[#727272]  font-bold tracking-[-1.2px] text-[20px] sm:text-[22px]">
                          Instagram
                        </p>
                      </a>
                    </div>

                    <div className="text-[#DCDCDC] rotate-[312deg] text-4xl">
                      <FaRegArrowAltCircleRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <h1 className="text-[28px] mt-14 sm:mt-0 font-bold text-[#323232] tracking-[-2px]">
                About me
              </h1>
              <p className="text-[20px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                I'm a multi-disciplinary Product Designer, specialising in
                no-code and visual development. Currently Design Lead @
                Revolution. Take a look below!
              </p>
              <h1 className="text-[28px] mt-12 font-bold text-[#323232] leading-[1.2em] tracking-[-2px]">
                Experience
              </h1>

              <p className="text-[#f1b43e] mt-3 text-[20px] sm:text-[26px] font-bold tracking-[-1px]">
                Design Lead @ Revolution
              </p>
              <p className="text-[16px] mt-2 font-medium text-[#727272]  tracking-[-1px]">
                Sep 2019 - Present
              </p>
              <p className="text-[20px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                Details of your job experience goes here. Briefly showcase what
                you did and what you have accomplished at this role. You can
                also talk about the tools you used.
              </p>

              {/*  */}

              <p className="text-[#f1b43e] mt-3 text-[20px] sm:text-[26px] font-bold tracking-[-1px]">
                Product Designer @ Circle
              </p>
              <p className="text-[16px] mt-2 font-medium text-[#727272]  tracking-[-1px]">
                Jul 2015 - Aug 2019
              </p>
              <p className="text-[20px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                Details of your job experience goes here. Briefly showcase what
                you did and what you have accomplished at this role. You can
                also talk about the tools you used.
              </p>

              {/*  */}
              <p className="text-[#f1b43e] mt-3 text-[20px] sm:text-[26px] font-bold tracking-[-1px]">
                Product Designer @ 360degree
              </p>
              <p className="text-[16px] mt-2 font-medium text-[#727272]  tracking-[-1px]">
                Jan 2012 - Mar 2015
              </p>
              <p className="text-[20px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                Details of your job experience goes here. Briefly showcase what
                you did and what you have accomplished at this role. You can
                also talk about the tools you used.
              </p>
              {/*  */}
              <h1 className="text-[28px] mt-12 font-bold text-[#323232] leading-[1.2em] tracking-[-2px]">
                Education
              </h1>

              {/*  */}
              <p className="text-[#f1b43e] mt-3 text-[20px] sm:text-[26px] font-bold tracking-[-1px]">
                University of Technology Sydney
              </p>
              <p className="text-[16px] mt-2 font-medium text-[#727272]  tracking-[-1px]">
                Feb 2008 - Oct 2011
              </p>
              <p className="text-[20px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                Here is where you can mention what you studied and brief details
                on what you learnt. You can also mention any extra-curricular
                activities you did relating to your degree.
              </p>

              {/* Skills */}
              <h1 className="text-[28px] mt-12 font-bold text-[#323232] leading-[1.2em] tracking-[-2px]">
                Skills
              </h1>
              <div className="flex gap-[50px] sm:gap-[90px]">
                <div className="flex flex-col gap-[10px] ">
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Farmer
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Prototyping
                  </p>

                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Wireframing
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    User Research
                  </p>
                </div>

                {/*  */}
                <div className="flex flex-col gap-[10px] ">
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Web Design
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    UI Design
                  </p>

                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    UX Design
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Interviews
                  </p>
                </div>
              </div>

              {/* interets */}

              <h1 className="text-[28px] mt-12 font-bold text-[#323232] leading-[1.2em] tracking-[-2px]">
                Interests
              </h1>
              <div className="flex gap-[40px] sm:gap-[80px]">
                <div className="block gap-[10px] ">
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Illustration
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    No Code Tools
                  </p>

                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    3D Modelling
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Motion Graphics
                  </p>
                </div>

                {/*  */}
                <div className="block gap-[10px] ">
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Gaming
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Bike Riding
                  </p>

                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Reading
                  </p>
                  <p className="text-[22px] sm:text-[26px] mt-3 font-medium text-[#727272] leading-[1.3em] tracking-[-1.5px]">
                    Football
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
