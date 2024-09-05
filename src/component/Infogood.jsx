import React from "react";
import { FaFingerprint } from "react-icons/fa";
const Infogood = () => {
  return (
    <div className="mt-[3rem] w-[1200px] mx-auto">
      <div className="flex items-center flex-col">
        <div className="text-center text-[#0F1728] ">
          <h2 className="font-semibold text-5xl">
            Good-bye to traditional <br />
            startup hassle.
          </h2>
        </div>

        <div className="flex flex-col gap-y-1 items-center text-base mt-2">
          <p className="text-gray-500 text-[20px]">
            Say farewell to the complexities of the past and unlock a smoother
            path to success.
          </p>
          <p className="text-gray-500 text-[20px]"> Welcome to a new era of simplicity and efficiency.</p>
        </div>

        <div className="flex flex-wrap mx-5 gap-4 pb-4 px-4 pt-1 mt-8">

          <div className="flex-1 bg-[#BDFF1C] pt-7 pl-10 pb-5 pr-10  text-center  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>

            <h3 className="font-semibold text-[1.6rem] text-start mt-5">
              Optimize your daily <br /> operations
            </h3>
            <p className="text-start mt-2 text-gray-700 font-medium">
            Our software simplifies complex <br/> business processes,
             helping you <br/> efficiently manage tasks, projects, <br/> and  resources.
            </p>
          </div>

          <div className="flex-1  bg-[#BDFF1C] pt-7 pl-10 pb-5 pr-10  text-center border  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>

            <h3 className="font-semibold text-[1.6rem] text-start mt-5">
              Make informed business <br />
              decision
            </h3>
            <p className="text-start mt-2 text-gray-700 font-medium">
              Our software provides comprehensive <br/> analytics, empowering you to
              identify <br/> trends, track performances, and adjust <br/> your strategies
              for success.
            </p>
          </div>

          <div className="flex-1  bg-[#BDFF1C] pt-7 pl-10 pb-5 pr-10  text-center border  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>
                   
            <h3 className="font-semibold text-[1.6rem] text-start mt-5">
              Scale your startup with confidence 
              
            </h3>
            <p className="text-start mt-2 text-gray-700 font-medium">
              Our software is disigned to grow <br/> alongside your business, adapting
              to <br/> your evolving needs. Scale your startup  with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infogood;
