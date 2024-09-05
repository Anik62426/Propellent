import React from "react";
import {  useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();
  return (
    
      <div className="flex justify-around items-center shadow-lg py-6">
        {/* home */}
        {/* <div className="">
          <button onClick={() => navigate("/")}>Home</button>
        </div> */}

        {/* all routes */}
        <div className="flex justify-center items-center gap-5 font-medium ">
          <button
            onClick={() => {
              navigate("/benefits");
            }}
          >
            Benefits
          </button>

          <button
            onClick={() => {
              navigate("/product");
            }}
          >
            Product
          </button>

          <button onClick={() => navigate("/testimonials")}>
            Testimonials
          </button>

          <button
            onClick={() => {
              navigate("/faqs");
            }}
          >
            FAQs
          </button>
        </div>
      </div>
    
  );
};

export default Navbar;
