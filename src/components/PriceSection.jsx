import React from 'react'
import{CheckCircle2} from "lucide-react"
import { pricingOptions } from '../constants'
function PriceSection() {
  return (
    <div className="mt-20  ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide ">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700   rounded-xl">
              <p className="text-4xl mb-8">
                {item.title}

                {item.title === "Pro" && (
                  <span className=" ml-2 mb-4 text-xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
                    (Most Popular)
                  </span>
                )}
              </p>

              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{item.price}</span>
                <span className="text-neutral-400 tracking-wide">/Month</span>
              </p>
              <ul>
                {item.features.map((feature, index) => (
                  <li className="flex text-neutral-500 gap-2 mt-8" key={index}>
                    <CheckCircle2 />
                    <span> {feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className=" inline-flex justify-center items-center px-2 py-3 border border-orange-900 rounded-lg transition-duration-200 w-full mt-20 p-5 tracking-tight text-xl hover:bg-orange-900"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceSection