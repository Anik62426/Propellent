import React,{useState} from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackHome from "./BackHome";

const SignIn = () => {
  return (
    <div className="relative w-full h-[100vh]">  
        <BackHome/>
        <div className="relative z-20 flex items-center justify-center"><Rightside />   </div>
            
    </div>
  );
};

export default SignIn;



function Rightside() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return re.test(String(email).toLowerCase());
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  };

 


  return (
    <div className=" pl-20 pt-24 flex ">
      <div>
        <div className="pt-4 pb-2 ">
          <div className="flex w-[19rem] items-center rounded-2xl bg-sky-200 pl-1 pr-2 pb-1.5 pt-1.5 text-sm">
            <p className="rounded-2xl bg-sky-300 font-medium  px-2 py-0 mr-1">
              Updates
            </p>
            We secured Millions of Users {"🡢"}
          </div>
        </div>
        <div>
          <h1 className="text-7xl ">
          Make a celebrity <br /> say anything  <br />
          </h1>
          <p className="mt-5 text-gray-600 text-lg font-medium ">
          Get hilarious videos in seconds with our AI celebs. Just pick a <br />celeb, write your message & receive video of them speaking <br /> your message!
          </p>
        </div>
        <div className="flex items-center mt-5">
          <img
            className="rounded-full h-8 p-0.5 bg-white"
            src={"https://res.cloudinary.com/dcfcgilpx/image/upload/v1725844240/f3ocrnptmm4rixcmbxja.avif"}
            alt="profile"
          />
          <img
            className="rounded-full h-8 p-0.5 bg-white ml-[-10px]"
            src={"https://res.cloudinary.com/dcfcgilpx/image/upload/v1725844240/f3ocrnptmm4rixcmbxja.avif"}
            alt="profile"
          />
          <img
            className="rounded-full h-8 p-0.5 bg-white ml-[-10px]"
            src={"https://res.cloudinary.com/dcfcgilpx/image/upload/v1725844240/f3ocrnptmm4rixcmbxja.avif"}
            alt="profile"
          />
          <img
            className="rounded-full h-8 p-0.5 bg-white ml-[-10px]"
            src={"https://res.cloudinary.com/dcfcgilpx/image/upload/v1725844240/f3ocrnptmm4rixcmbxja.avif"}
            alt="profile"
          />
          <div className=" flex pl-2">{Array.from({ length: 5 }, (x,i) => (
              <Star key={i} fill="#FEC84B" strokeWidth={0} />
          ))}</div>
        </div>
      </div>
      <div className="ml-[13rem] pt-4  shadow-2xl border-t-2 rounded-2xl w-[26rem] h-[23rem] px-3 ">
        <div className="flex flex-col justify-center items-center  ">
          <div className="">
            <h1 className="text-2xl text-center text-black  font-serif pt-6"> Create funny videos with your favorite celebs</h1>
            <p className="pt-3 text-2xl text-center text-black  font-serif">
            Try the most realistic sounding AI voices now
            </p>
          </div>
          <div className="flex flex-col ">
            {/* <input className=" px-2 py-2 bg-gray-200 rounded-md mt-5 w-[20rem] h-12" type="text" placeholder="Your name" /> */}
            <input className="px-2 py-2 bg-gray-200 rounded-md mt-2 w-[20rem] h-12" type="email"  
        value={email} 
        onChange={handleChange}  placeholder="Your email" />
         {!isValid && <p>Please enter a valid email address</p>}
         {
          !isValid ?<button  onClick={(e)=>navigate("./sign-up")} className=" py-3  bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-200 hover:bg-gradient-to-br rounded-md mt-2 w-[20rem] text-white font-semibold">Get Started</button> :
          <button onClick={()=>alert("please enter valid email")} className=" py-3  bg-gradient-to-br from-blue-600 to-cyan-400 hover:bg-gradient-to-tr focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-md mt-2 w-[20rem] text-white font-semibold">Get Started</button>
         }
            
            
            <div className="flex pt-2">
              <input className="mr-2 " type="checkbox"/>
            <p className="text-sm">
            I agree to the
            </p>
            <p className="font-semibold underline text-sm pl-1 "> Terms of License</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
