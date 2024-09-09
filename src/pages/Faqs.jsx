import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faqs = () => {
  const data = [
    {
      title: "Manage Billing and Control Costs",
      description:
        "You need complete, near real-time visibility of your cost and usage information to make informed decisions. AWS equips you with tools to organize your resources based on your needs, visualize and analyze cost and usage data in a single pane of glass, and accurately chargeback to appropriate entities (e.g. department, project, product). Rather than centrally policing the cost, you can provide real-time cost data that makes sense to your engineering, application, and business teams. The detailed, allocable cost data allows teams to have the visibility and details to be accountable of their own spend.",
    },
    {
      title: "Organize and Report Cost and Usage based on User-Defined Methods",
      description:
      "Business and organization leaders need a simple and easy way to access AWS billing information, including a spend summary, a breakdown of all service costs incurred by accounts across the organization, along with discounts and credits. Customer can choose to consolidate your bills and take advantage of higher volume discounts based on aggregated usage across your bills. Leaders also need to set appropriate guardrails in place so you can maintain control over cost, governance, and security. AWS helps organizations balance freedom and control by enabling the governance of granular user permission.",
    },
    {
      title: "Manage Billing and Control Costs",
      description:
        "You need complete, near real-time visibility of your cost and usage information to make informed decisions. AWS equips you with tools to organize your resources based on your needs, visualize and analyze cost and usage data in a single pane of glass, and accurately chargeback to appropriate entities (e.g. department, project, product). Rather than centrally policing the cost, you can provide real-time cost data that makes sense to your engineering, application, and business teams. The detailed, allocable cost data allows teams to have the visibility and details to be accountable of their own spend.",
    },
    {
      title: "Organize and Report Cost and Usage based on User-Defined Methods",
      description:
      "Business and organization leaders need a simple and easy way to access AWS billing information, including a spend summary, a breakdown of all service costs incurred by accounts across the organization, along with discounts and credits. Customer can choose to consolidate your bills and take advantage of higher volume discounts based on aggregated usage across your bills. Leaders also need to set appropriate guardrails in place so you can maintain control over cost, governance, and security. AWS helps organizations balance freedom and control by enabling the governance of granular user permission.",
    },
  ];

  return (
    <div className="flex justify-end">
      <div className="flex items-center flex-col relative top-[6rem] mb-44 ">
        <p className="text-black text-4xl sticky top-[8rem]">Frequently Asked Questions<br /></p>
      </div>
      <div className=" flex flex-col text-center w-[55%] mt-24  ">
        {data.map((ele,index)=>{
          return <Popups key={index}>{ele}</Popups>
        })}
      </div>
    </div>
  );
};

function Popups({ children }) {
  const [popup, setPopup] = useState(false);
  
  return (
    <div className="flex items-center justify-center pb-4 ">
      <div className=" flex flex-col text-lg w-[65%]  rounded-md">
        <div
          onClick={() => {
            setPopup(!popup);
          }}
          className="flex items-center justify-between py-3 cursor-pointer h-16 pl-4 pr-2 text-lg shadow-sm hover:bg-gradient-to-r from-sky-100 via-blue-200 to-purple-100 ..."
        >
          <p className="font-semibold text-start">{children.title}</p>
          <button 
            className="font-semibold text-3xl cursor-pointer  "
            onClick={() => {
              setPopup(!popup);
            }}
          >
            {popup ? <Minus /> : <Plus />}
          </button>
        </div>
        <div>
          {popup && (
            <div>
              <p className="text-base text-pretty text-start mx-3 py-4 ">
                {children.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
