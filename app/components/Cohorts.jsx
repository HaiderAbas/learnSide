"use client";
import React from "react";

const Cohorts = () => {
  return (
    <div className="flex justify-center items-center bg-[#F7F8F9] text-center py-12 px-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F243D]">
          Our Cohorts
        </h2>
        <p className="text-[#0F243DCC] text-base sm:text-lg mt-4">
          Hurry! Only limited seats remaining. Secure your spot today and <br /> start
          your coding journey with personalized support, real-world <br /> projects,
          and a 100% job guarantee.
        </p>
        <div className="flex justify-evenly mt-10 items-center">
          {[
        { number: (<><span>15th Oct,</span> <br /> <span>2024</span></>), label: "5 Spots left" },
        { number: (<><span>15th Feb,</span> <br /> <span>2024</span></>), label: "6 Spots left" },
        { number: (<><span>15th Jun,</span> <br /> <span>2024</span></>), label: "6 Spots left" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="font-inter font-semibold text-[25px] leading-[32px] tracking-[1%] text-center capitalize">{item.number}</h2>
              <p className="text-gray-700 text-lg mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cohorts;
