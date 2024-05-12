import React from "react";

import { discount, robotcard,} from "../assets";


const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full  flex flex-col gap-x-12 md:flex-row  sm:pl-16 pl-4"
    >
      <div className=" flex-col ">
        <div className="mt-10 bg-discount-gradient rounded-md text-white flex flex-row h-[40px] w-[350px] justify-center items-center mr-2">
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]   ml-2 mr-2"
          />
          <p className="pr-2"> 20% Discount on your first purchase</p>
        </div>
        <p className="pt-10 text-white text-[30px] ss:text-[50px] font-poppins">
          EasyPay Next <br />
          <span className="text-gradient font-bold">Generation</span>
          <br />
          Paymenet Method
        </p>

        <p className="pt-10 text-white pr-3 text-[13px] ss:text-[18px] md:min-w-[470px] max-w-[500px]  font-poppins text-justify">
          Our team of experts uses a methadology to 
          identify the credit cards
          most likely to fit your needs. we examine annual percentage rates,
          annual fees
        </p>
      </div>

      <div className="text-white ">
        <img src={robotcard} className="w-[500px] mr-12 drop-shadow-[0_35px_35px_rgba(185,185,185,0.25)] " />
      </div>
    </section>
  );
};

export default Hero;
