import React from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaDribbble,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import ColsThreeContact from "./ColsThreeContact";

const ColsTwoContact = () => {
  return (
    <div>
      <div className="bg-[#FCFAF4] pt-20">
        <div className="wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#FCFAF4]">
            <div className="w-[80%]">
              <h1 className="text-[30px] sm:text-[40px] font-bold text-[#323232] tracking-[-2px]">
                Get in Touch <span>✨</span>
              </h1>
              <p className="text-[#727272] mt-3 text-[20px] sm:text-[26px] font-medium tracking-[-1.5px] leading-[1.3em]">
                I’m always open to collaborate on a project or hear about an
                opportunity!
              </p>
              <p className="text-[#727272] mt-[30px] sm:mt-[60px]  text-[14px] font-medium tracking-[-1px] leading-[1.2em]">
                WANT TO CALL ME?
              </p>
              <a href="">
                <p className="text-[#727272] mt-3  no-underline text-[22px] font-medium tracking-[-1.2px] leading-[1.2em]">
                  Schedule a call with me
                </p>
              </a>

              <p className="text-[#727272]  mt-[30px] text-[14px] font-medium tracking-[-1px] leading-[1.2em]">
                JUST WANT TO EMAIL ME?
              </p>
              <a href="">
                <p className="text-[#727272] mt-3  no-underline text-[22px] font-medium tracking-[-1.2px] leading-[1.2em]">
                  hello@andrew.com
                </p>
              </a>
              <div className="flex gap-6 mt-10 sm:mt-16">
                <div>
                  {" "}
                  <a className="text-[30px] sm:text-[40px] text-[grey]" href="">
                    <FaLinkedin />
                  </a>
                </div>
                <div>
                  <a className="text-[30px] sm:text-[40px] text-[grey]" href="">
                    <FaTwitterSquare />
                  </a>
                </div>
                <div>
                  <a className="text-[30px] sm:text-[40px] text-[grey]" href="">
                    <FaDribbble />
                  </a>
                </div>
                <div>
                  <a className="text-[30px] sm:text-[40px] text-[grey]" href="">
                    <FaFacebook />
                  </a>
                </div>
                <div>
                  <a
                    className=" text-[30px] sm:text-[40px] text-[grey]"
                    href=""
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form action="">
                <div className="bg-white border-0 divide-white rounded-2xl">
                  <div className="px-3 py-3 sm:px-6 mt-10 sm:mt-0 sm:py-6">
                    <input
                      placeholder="Name"
                      className="bg-[#FAF8F2] outline-none border-0 rounded-lg w-full  p-3"
                      type="text"
                    />
                    <input
                      placeholder="Email"
                      className="bg-[#FAF8F2] outline-none border-0 rounded-lg w-full mt-5  p-3"
                      type="email"
                    />
                    <textarea
                      className="bg-[#FAF8F2] outline-none border-0 rounded-lg w-full mt-5  p-3"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Type your message"
                    ></textarea>
                    <a href="#">
                      {" "}
                      <button className="text-[white] text-[16px] font-semibold p-4 bg-[#f1b43e] border-0 rounded-lg w-full mt-5 3">
                        Send Message
                      </button>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ColsThreeContact />
        </div>
      </div>
    </div>
  );
};

export default ColsTwoContact;
