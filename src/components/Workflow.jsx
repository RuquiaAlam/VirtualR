import React from "react";
import codeImg from "../assets/code.jpg";
import {CheckCircle2} from "lucide-react"
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="border-b border-neutral-700 min-h-[800px]">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center text-wrap mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Code" />
        </div>
        <div className="p-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h2 className="mt-1 mb-2 text-xl ">{item.title}</h2>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
