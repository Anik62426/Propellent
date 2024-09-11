import React from "react";
import Flexfeature from "./Flexfeature";

import { useNavigate } from "react-router-dom";

export const data = [
  {
    Title: "Create hilarious AI videos",
    imageUrl:
      "https://res.cloudinary.com/dpvt2kpli/image/upload/v1725816952/o2fxnb79ksapmtelofgz.jpg",
    description:
      "Make incredible video content powered by our AI voices. With the latest in AI technology, you can create videos that wow your friends in seconds.",
    buttonData: "Create A Video",
  },
  {
    Title: "AI Voices For Every Idea",
    imageUrl:
      "https://res.cloudinary.com/dpvt2kpli/image/upload/v1725817302/mjdemvqcf1jyael7lib2.jpg",
    description:
      "Generate realistic AI voices and videos for any idea. Choose from a wide range of celebrity voices, characters, and more. With hundreds of voices, and new ones added every day from our community, the possibilities are endless.",
    buttonData: "Pick A Voice",
  },
];

const Features = () => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-serif font-medium ml-14 ">
        The #1 AI Voice Generator & Video Maker
      </h1>
      <h1 className="text-xl font-serif ml-14 mt-4">
        The fastest way to create hilarious videos with your favorite
        celebrities and characters
      </h1>
      <div className="flex mt-10 pt-14 pb-14 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-300 ">
        {data.map((ele,index) => {
          return <Card key={index}>{ele}</Card>;
        })}
      </div>
      <Flexfeature />
      
    </div>
  );
};

function Card({ children }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[50%] h-[43rem]  ">
      <div className=" bg-white ml-10 mt-5 mr-8 mb-6 border-2 h-full p-10  rounded-lg">
        <h1 className="text-2xl font-bold  ">{children.Title}</h1>
        <img
          className="w-[22rem] pt-5 ml-2 hover:scale-110 duration-500"
          src={children.imageUrl}
        />
        <p className="pt-5 text-lg font-medium font-serif">
          {children.description}
        </p>
        <button
          onClick={() => navigate("./sign-up")}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-7"
        >
          {children.buttonData}
        </button>
      </div>
    </div>
  );
}

export default Features;
