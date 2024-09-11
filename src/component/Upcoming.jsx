import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Upcoming = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center flex-col mt-40 ">
      <h1 className="text-center text-gray-800 text-4xl font-bold">
        And more is comming
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-16">
        <div className="flex gap-2 bg-white  ">
          <div
            className="bg-black h-[44px] text-sky-400
            w-[66px] text-2xl px-4 rounded-full flex items-center justify-center"
          >
            <FaFingerprint />
          </div>
          <div>
            <p className="font-semibold text-base md:text-xl">
              AI–powered editor
            </p>
            <p className="text-sm text-gray-600">
              Assign tasks, set priorities,
              <br /> and track progress <br /> effortlessly
            </p>
          </div>
        </div>

        {/* 2nd card */}
        <div className="flex gap-2 bg-white  ">
          <div
            className="bg-black h-[44px]  w-[66px]
            text-sky-400 text-2xl px-4 rounded-full flex items-center justify-center"
          >
            <FaFingerprint />
          </div>
          <div>
            <p className="font-semibold text-base ">Tools integrations</p>
            <p className="text-sm text-gray-600">
              Visualize trends <br /> and monitor key performances{" "}
            </p>
          </div>
        </div>

        {/* 3rd card */}
        <div className="flex gap-2 bg-white  ">
          <div
            className="bg-black h-[44px]  w-[66px]
          text-sky-400
             text-2xl px-4 rounded-full flex items-center justify-center"
          >
            <FaFingerprint />
          </div>
          <div>
            <p className="font-semibold text-base">Data analytics</p>
            <p className="text-sm text-gray-600">
              Customize workflows, add <br /> integrations, and adapt
              <br /> features
            </p>
          </div>
        </div>

        {/* 4th card */}

        <div className="flex gap-2 bg-white  ">
          <div
            className="bg-black h-[44px] w-[66px]
            text-sky-400
             text-2xl px-4 rounded-full flex items-center justify-center"
          >
            <FaFingerprint />
          </div>
          <div>
            <p className="font-semibold text-base ">
              Intuitive Task <br /> Management
            </p>
            <p className="text-sm text-gray-600">
              Assign tasks, set priorities,
              <br /> and track progress
              <br /> effortlessly
            </p>
          </div>
        </div>

        {/* 5th card */}
        <div className="flex gap-2 bg-white ">
          <div
            className="bg-black h-[44px]
            text-sky-400
            w-[66px] text-2xl px-4 rounded-full flex items-center justify-center"
          >
            <FaFingerprint />
          </div>
          <div>
            <p className="font-semibold text-base ">
              Advanced Data
              <br /> Analytics
            </p>
            <p className="text-sm text-gray-600">
              Visualize trends and monitor
              <br /> key performances
            </p>
          </div>
        </div>

        {/* 6th card */}
        <div className="flex gap-2 bg-white">
          <div
            className="bg-black h-[44px]
            text-sky-400
            w-[66px] text-2xl px-4 rounded-full flex items-center justify-center"
          >
            <FaFingerprint />
          </div>
          <div>
            <p className="font-semibold text-base ">
              Scalability and <br /> Customization
            </p>
            <p className="text-sm text-gray-600">
              Customize workflows, add <br />
              integrations, and adapt
              <br /> features
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-16">
        <button
          onClick={() => navigate("/benefits")}
          className="px-4 py-2  bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Get Template
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
