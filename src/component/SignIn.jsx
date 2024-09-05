import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  return (
    <div className="flex">
      <Rightside />
    </div>
  );
};

export default SignIn;



function Rightside() {
  const navigate = useNavigate();
  return (
    <div className=" pl-20 pt-10 flex">
      <div>
        <div className="pt-4 pb-2 ">
          <div className="flex w-[19rem] items-center rounded-2xl  bg-lime-200 pl-1 pr-2 pb-1.5 pt-1.5 text-sm">
            <p className="rounded-2xl bg-lime-400 font-medium  px-2 py-0 mr-1">
              Updates
            </p>
            We secured 3M Series B round {"🡢"}
          </div>
        </div>
        <div>
          <h1 className="text-7xl bg-footer-texture bg-contain bg-no-repeat">
            Ease your mind <br /> on business <br /> operations.
          </h1>
          <p className="mt-5 text-gray-600 font-medium">
            From intuitive task management to advanced data <br /> analytics,
            our software equips you with the tools <br /> you need to thrive in
            today's competitive business <br /> landscape.
          </p>
        </div>
        <div className="flex items-center mt-3">
          <img
            className="rounded-full h-8 p-0.5 bg-white"
            src={"../src/assets/profile.png"}
            alt="profile"
          />
          <img
            className="rounded-full h-8 p-0.5 bg-white ml-[-10px]"
            src={"../src/assets/profile.png"}
            alt="profile"
          />
          <img
            className="rounded-full h-8 p-0.5 bg-white ml-[-10px]"
            src={"../src/assets/profile.png"}
            alt="profile"
          />
          <img
            className="rounded-full h-8 p-0.5 bg-white ml-[-10px]"
            src={"../src/assets/profile.png"}
            alt="profile"
          />
          {Array.from({ length: 5 }, () => (
            <Star fill="#FEC84B" strokeWidth={0} />
          ))}
        </div>
      </div>
      <div className="ml-[13rem] mt-16 shadow-lg rounded-2xl w-[24rem] h-[20rem] ">
        <div className="flex flex-col justify-center items-center  ">
          <div className="">
            <h1 className="text-2xl font-semibold pt-7 text-center">Secure your spot now</h1>
            <p className="pt-3 text-sm text-gray-700">
              Be the first to know when the product launches 
            </p>
            <p className="text-center text-sm text-gray-700">and other not-to-miss updates</p>
          </div>
          <div className="flex flex-col">
            <input className=" px-2 py-2 bg-gray-200 rounded-md mt-5 w-72" type="text" placeholder="Your name" />
            <input className="px-2 py-2 bg-gray-200 rounded-md mt-2 w-72" type="email" placeholder="Your email" />
            <button onClick={()=>{navigate("./benefits")}} className="px-2 py-2 bg-blue-600 rounded-md mt-2 w-72 text-white font-semibold">Join the Waitlist</button>
            
            <div className="flex pt-2">
            <p className="text-xs">
              By subscribing you agree with our
            </p>
            <p className="font-semibold underline text-xs pl-1 "> Terms of License</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
