import React from "react";

import { features } from "../constants";

const Business = () => {
  return (
    <section id="features" className="flex flex-col mt-28">
      <div>
        <p className="text-white font-poppins text-gradient font-bold text-[25px] md:text-center  sm:text-[50px] pb-7">
          Our Business
        </p>

        <p className="text-white font-poppins  text-[14px] text-justify sm:text-[20px]">
          <span>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </span>
          <br />
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 mt-8 mb-10 flex-1">
        {features.map((features, index) => (
          <div
            key={features.id}
            className="flex flex-row items-center rounded-md shadow-lg p-4  bg-discount-gradient "
          >
            <img
              src={features.icon}
              className="h-[40px] w-[40px] items-center mr-2"
            />
            <div className="flex flex-col  text-white ">
              <span className="font-bold font-poppins">{features.title}</span>
              <span className="font-poppins">{features.content}</span>
            </div>
          </div>
        ))}

       
      </div>
    </section>
  );
};

export default Business;
