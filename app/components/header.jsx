"use client";

import TestimonialCard from "./TestimonialCard";

const Header = () => {
    return (
        <div className="flex flex-col fonr-Inter  md:flex-row justify-between items-center p-6 w-full bg-[#0F243D] bg-opacity-30 shadow-md">
            <div className="max-w-lg text-center md:text-left space-y-4">
                <h2 className=" font-bold text-white text-[45px]">
                    <span className="text-blue-500">Hey</span>Learn
                    <span className="text-blue-500">2</span>Code’s <br /> Full Stack Coding <br /> Bootcamp
                </h2>
                <p className="text-sm font-normal text-[12px] leading-7	 text-[#F0F3FF]">
                    Become a Full-Stack Developer in 4 Months and get a developer job. If
                    not, it is 100% FREE.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <button className="px-3 py-2 font-Inter text-[13px] font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition border-none outline-none">
                        Apply Now
                    </button>
                    <button className="px-3 py-2 font-Inter text-[13px] font-medium bg-white text-[#0F243D] rounded-md transition border-none outline-none">
                        Get Free Access
                    </button>
                </div>

                <p className="text-base text-[12px] leading-8	 font-normal font-Inter text-[#F0F3FF]">
                    ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
                </p>
                <div className="border border-[#1D436F] rounded-lg p-1 text-[#F0F3FF] grid grid-cols-1 sm:grid-cols-2 sm: lg:flex lg:justify-between lg:items-center gap-3 lg:gap-6">
                    {[
                        "Get developer job or it’s 100% free",
                        "Learn practical coding skills with real projects",
                        "Mentorship & Career support included",
                        "Flexible learning schedule",
                    ].map((text, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <p className="lg:text-[10px] sm:text-[12px] md:text-[14px]">{text}</p>
                            <span className="w-[3px] h-6 md:h-8 bg-[#1D436F]"></span>

                        </div>
                    ))}
                </div>

            </div>
            <div className="mt-6 md:mt-0">
                <TestimonialCard />
            </div>
        </div>
    );
};

export default Header;
