import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const data = [
    {
      title: "Lifetime-Premium",
      pricing: {
        old: 99,
        new: 49,
      },
      des1: "Access all AI voices",
      des2: {
        first: "Unlimited ",
        second: "generations",
      },
      des3: {
        first: "Remove watermarks",
      },
      des4: {
        first: "Fast",
        second: "process speeds",
      },
      des5: {
        first: "High",
        second: "quality audio & video",
      },
      des6: {
        first: "Priority",
        second: "support",
      },
    },
    {
      title: "Lifetime-Access",
      pricing: {
        old: 79,
        new: 29,
      },
      des1: "Access all AI voices",
      des2: {
        first: "100  ",
        second: "Generations per month",
      },
      des3: {
        first: "Remove watermarks",
      },
      des4: {
        first: "Standard ",
        second: "processing speeds",
      },
      des5: {
        first: "Standard",
        second: "quality audio & video",
      },
    },
    {
      title: "Weekly",
      pricing: {
        old: 21,
        new: 6,
      },
      des1: "Access all AI voices",
      des2: {
        first: "100  ",
        second: "Generations per month",
      },
      des3: {
        first: "Remove watermarks",
      },
      des4: {
        first: "Standard ",
        second: "processing speeds",
      },
      des5: {
        first: "Standard",
        second: "quality audio & video",
      },
    },
  ];

  // -----------------------

  const [plan, SetPlans] = useState(false);

  return (
    <div className="ml-10 mt-10 mb-20">
      <div>
        <h1 className="text-4xl">Choose the plan that's right for you</h1>
      </div>

      <div
        onClick={() => SetPlans(!plan)}
        className="flex justify-evenly items-start mt-10 "
      >
        {data.map((ele, index) => (
          <PricingComponent key={index}>{ele}</PricingComponent>
        ))}
      </div>
    </div>
  );
};

function PricingComponent({ children }) {
  const [payment, SetPayment] = useState(0);
  const navigate = useNavigate();

  function handleChange(e) {
    SetPayment(e.target.value);
  }

  return (
    <div className=" flex flex-col items-center  w-[27%] border-2 rounded-xl hover:border-t-orange-600 hover:border-t-8 hover:border-l-orange-500 hover:border-b-orange-400 hover:border-r-orange-300">
      <div className="pl-5 mt-5 h-20 py-4 w-[90%] text-start rounded-xl bg-gradient-to-r from-purple-700 via-blue-600 to-blue-400 ...">
        <p className="text-white font-semibold">{children.title}</p>
        <p className="text-white font-semibold"></p>
      </div>
      <div className="w-[236px] h-4/5 mr-6">
        <div className=" h-[66px] pt-5 pb-16 border-b-2 ">
          <p className="text-lg">Pricing</p>
          <div className="flex ">
            <p className="text-gray-500 text-lg line line-through pr-2">
              ${children.pricing.old}
            </p>
            <p className="text-black pr-2 text-lg"> ${children.pricing.new}</p>
          </div>
        </div>
        <p className=" h-[66px] pt-5 pb-10 border-b-2">{children.des1} </p>
        <p className=" h-[66px] pt-5 pb-10  border-b-2">
          {children.des2.first}
          {children.des2.second}
        </p>
        <p className=" h-[66px] pt-5 pb-10  border-b-2">
          {children.des3.first}{" "}
        </p>
        <p className=" h-[66px] pt-5 pb-10  border-b-2">
          {children.des4.first} {children.des4.second}{" "}
        </p>
        <p className=" h-[66px] pt-5 pb-10 mb-5 ">
          {children.des5.first} {children.des5.second}
        </p>
        <button
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-20 py-3 text-center me-2 mb-14"
          name="payment"
          value={children.pricing.new}
          onClick={(e) => {
            handleChange(e), navigate("./payment");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default Plans;
