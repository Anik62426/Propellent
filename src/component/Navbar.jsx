import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around bg-white items-center shadow-lg py-6 sticky w-full z-30 top-0 start-0 ">
      <div className="flex justify-center items-center gap-5 font-medium ">
        <button onClick={() => navigate("/")}>Home</button>
        <button
          onClick={() => {
            navigate("/features");
          }}
        >
          Feature
        </button>

        <button
          onClick={() => {
            navigate("/plans");
          }}
        >
          Pricing
        </button>

        <button onClick={() => navigate("/testimonials")}>Testimonials</button>

        <button
          onClick={() => {
            navigate("/faqs");
          }}
        >
          FAQs
        </button>
      </div>
      <button className=" text-white font-bold px-9 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-200 hover:bg-gradient-to-tr" onClick={()=>{navigate("./sign-up")}}>Get Started</button>
    </div>
  );
};

export default Navbar;
