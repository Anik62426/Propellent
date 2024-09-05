import React from "react";
import { FaFingerprint } from "react-icons/fa";
const Infogood = () => {
  return (
    <div className="mt-[3rem] w-[1200px] mx-auto">
      <div className="flex items-center flex-col">
        <div className="text-center text-[#0F1728] ">
          <h2 className="font-semibold text-[3.4rem]">
            Good-bye to traditional <br />
            startup hassle.
          </h2>
        </div>

        <div className="flex flex-col gap-y-1 items-center text-lg mt-2">
          <p className="text-gray-500 text-[20px]">
            Say farewell to the complexities of the past and unlock a smoother
            path to success.
          </p>
          <p className="text-gray-500 text-[20px]"> Welcome to a new era of simplicity and efficiency.</p>
        </div>

        <div className="flex flex-wrap mx-5 gap-4 p-4 mt-[60px]">




          <div className="flex-1 bg-[#BDFF1C] pt-8 px-8 pb-4 text-center  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>

            <h3 className="font-semibold text-[1.6rem] text-start mt-7">
              Optimize your daily <br /> operations
            </h3>
            <p className="text-start mt-5 text-gray-600">
            Our software simplifies complex <br/> business processes,
             helping you <br/> efficiently manage tasks, projects, <br/> and  resources.
            </p>
          </div>



          <div className="flex-1  bg-[#BDFF1C] pt-8 px-8 pb-4  text-center border  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>

            <h3 className="font-semibold text-[1.6rem] text-start mt-7">
              Make informed business <br />
              decision
            </h3>
            <p className="text-start mt-5 text-gray-600">
              Our software provides comprehensive <br/> analytics, empowering you to
              identify <br/> trends, track performances, and adjust <br/> your strategies
              for success.
            </p>
          </div>

          <div className="flex-1  bg-[#BDFF1C] pt-8 px-8 pb-4  text-center border  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>
                   
            <h3 className="font-semibold text-[1.6rem] text-start mt-7">
              Scale your startup with confidence 
              confidence
            </h3>
            <p className="text-start mt-5 text-gray-700 font-medium">
              Our software is disigned to grow <br/> alongside your business, adapting
              to <br/> your evolving needs. Scale your  startup <br/> with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infogood;
