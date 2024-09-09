import React from "react";
import { FaFingerprint } from "react-icons/fa";
const Infogood = () => {
  return (
    <div className="mt-[3rem] w-[1200px] mx-auto">
      <div className="flex items-center flex-col">
        <div className="text-center text-[#0F1728] ">
          <h2 className="font-semibold text-5xl">
          amet consectetur adipisicing <br />
          sit adipisicing.
          </h2>
        </div>

        <div className="flex flex-col gap-y-1 items-center text-base mt-3">
          <p className="text-gray-500 text-[20px]">
          sit amet consectetur adipisicing 
            sit amet consectetur 
          </p>
          <p className="text-gray-500 text-[20px]"> sit amet consectetur adipisicing </p>
        </div>

        <div className="flex flex-wrap mx-5 gap-4 pb-4 px-4 pt-1 mt-8">

          <div className="flex-1 bg-sky-300 pt-7 pl-10 pb-7 pr-10  text-center  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>

            <h3 className="font-semibold text-[1.6rem] text-start mt-5">
            Lorem ipsum, dolor  <br />  adipisicing
            </h3>
            <p className="text-start mt-2 text-gray-700 font-medium">
            Lorem ipsum, dolor sit amet  <br/>  consectetur adipisicing
            Lorem ipsum, <br/> dolor sit amet consectetur adipisicing <br/> consectetur adipisicing
            </p>
          </div>

          <div className="flex-1  bg-sky-300 pt-7 pl-10 pb-7 pr-10  text-center border  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>

            <h3 className="font-semibold text-[1.6rem] text-start mt-5">
            Lorem ipsum, dolor  <br />  adipisicing
            </h3>
            <p className="text-start mt-2 text-gray-700 font-medium">
            Lorem ipsum, dolor sit amet  <br/>  consectetur adipisicing
            Lorem ipsum, <br/> dolor sit amet consectetur adipisicing <br/> consectetur adipisicing
            </p>
          </div>

          <div className="flex-1  bg-sky-300  pt-7 pl-10 pb-7 pr-10  text-center border  rounded-2xl">
            <div className="bg-black h-[64px] w-[64px] text-white rounded-full flex items-center justify-center">
              <FaFingerprint />
            </div>
                   
            <h3 className="font-semibold text-[1.6rem] text-start mt-5">
            Lorem ipsum, dolor sit amet 
              
            </h3>
            <p className="text-start mt-2 text-gray-700 font-medium">
            Lorem ipsum, dolor sit amet  <br/>  consectetur adipisicing
            Lorem ipsum, <br/> dolor sit amet consectetur adipisicing <br/> consectetur adipisicing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infogood;
