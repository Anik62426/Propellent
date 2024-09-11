import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [hide,Sethide]=useState(true)
 
  useEffect(()=>{
    if(window.location.pathname == '/sign-up'){
      Sethide(false)
      console.log("hello")
    }
    console.log(window.location.pathname)
  },[])
  
  return (
    <div className="flex justify-around bg-white items-center shadow-lg py-6 sticky w-full z-30 top-0 start-0 ">
      <div className="flex justify-center items-center gap-5 font-medium ">
        <button onClick={() => {navigate("/"),Sethide(true)}}>Home</button>
        <button
          onClick={() => {
            navigate("/features"),Sethide(false)
          }}
        >
          Feature
        </button>

        <button
          onClick={() => {
            navigate("/plans"),Sethide(false)
          }}
        >
          Pricing
        </button>

        <button onClick={() => {navigate("/testimonials"),Sethide(false)}}>Testimonials</button>

        <button
          onClick={() => {
            navigate("/faqs"),Sethide(false);
          }}
        >
          FAQs
        </button>
      </div>
      {hide ? <button
        className=" text-white font-bold px-9 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-200 hover:bg-gradient-to-tr"
        onClick={() => {navigate("./sign-up"),Sethide(!hide) }}
      >
        Get Started
      </button>:<></> }
      
    </div>
  );
};

export default Navbar;
