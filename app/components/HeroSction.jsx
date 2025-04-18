"use client";

import TestimonialCarousel from "./TestimonialCard";

const Hero = () => {
    return (
        <div className=" bg-[#0F243D] bg-opacity-30 shadow-md font-Inter flex justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 py-12 w-full max-w-[1290px] mx-auto">
                <div className="max-w-lg text-center md:text-left space-y-4">
                    <h2 className="font-inter font-bold text-white text-[20px] sm:text-[30px] md:text-4xl leading-[38px] sm:leading-[30px] md:leading-[50px] tracking-[-0.02em]">
                        <span className="text-blue-500 font-inter font-bold">Hey</span>Learn
                        <span className="text-blue-500 font-inter font-bold">2</span>Code’s <br />
                        Full Stack Coding <br /> Bootcamp
                    </h2>

                    <p className="text-[10px] sm:text-sm leading-6 text-[#F0F3FF]">
                        Become a Full-Stack Developer in 4 Months and get a <br /> developer job. If not, it is 100% FREE.
                    </p>

                    <div className="flex flex-row text-center sm:justify-center lg:justify-start gap-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition !text-sm">
                            Apply Now
                        </button>
                        <button className="px-4 py-2 bg-white text-[#0F243D] rounded-md transition !text-sm">
                            Get Free Access
                        </button>
                    </div>

                    <p className="text-[13px] sm:text-sm leading-6 text-[#F0F3FF] sm:text-center lg:text-start sm:font-[8px]">
                        ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
                    </p>

                    <div className="border border-[#1D436F] rounded-lg p-3 grid grid-cols-2 sm:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-3 lg:gap-6 text-[#F0F3FF]">
                        {[
                            "Get developer job or it’s 100% free",
                            "Learn practical coding skills with real projects",
                            "Mentorship & Career support included",
                            "Flexible learning schedule",
                        ].map((text, index) => (
                            <div key={index} className="flex items-center gap-2 text-[9px] sm:text-[10px]">
                                <span className="w-1 h-10 bg-[#1D436F]"></span>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full ">
                    <TestimonialCarousel />
                </div>

            </div>
        </div>
    );
};

export default Hero;
