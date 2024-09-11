import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const data = [
    {
      name: "Andrew15",
      quote: "Super Funny",
      description:
        "My friend sent me one of these clips and I have to say, I am blown away by the realistic and high-quality of clips it produces.",
    },
    {
      name: "Chef el pastor",
      quote: "Excellent App",
      description:
        "Excellent App. This app offers endless entertainment and functions well. I also want to express my gratitude to the developer for updating and resolving an issue with an iPhone mini.",
    },
    {
      name: " CosmicCrab",
      quote: "This AI quality is insanse",
      description:
        "Impressive voice, though a bit of tweaking needed. I've made a bunch of videos with random phrases. The output is generally good, but occasionally you need to adjust the wording.",
    },
    {
      name: "cchase1999",
      quote: "Highly recommended",
      description:
        "Joes voice is my favorite. Absolutely would pay for this application. I had to learn how to modify pitch and tone with some punctuation but after that results are amazing. Highly recommended and definitely worth the effort. Thank you!",
    },
  ];

  return (
    <div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <h1 className="text-4xl">Join With Millions Of Happy Users</h1>
          <svg
            className="h-12 mt-2 mx-auto text-black "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </figure>
      </div>
      <section className="grid grid-cols-3 gap-5 w-[95%] mb-10 ">
        {data.map((ele,index) => (
          <Card key={index}>{ele}</Card>
        ))}
      </section>
    </div>
  );
};





function Card({ children }) {
  return (
    <div className=" flex flex-col pb-7 w-[22rem] border-2 rounded-2xl pt-6 ml-12 px-4 mb-8">
      <div className=" font-bold pl-5 text-xl text-gray-900">
        {children.name}
      </div>
      <div className="flex flex-col pl-4 pt-3 ">
        <div className="flex  ">
          {Array.from({ length: 5 }, (x, i) => (
            <Star key={i} fill="#FEC84B" strokeWidth={0} />
          ))}
        </div>
        <p className="pl-1 pt-3 font-semibold">{children.quote}</p>
      </div>
      <p className=" pt-3 pl-5 pr-2 font-medium text-gray-900 font-serif">
        {children.description}
      </p>
    </div>
  );
}

export default Testimonials;
