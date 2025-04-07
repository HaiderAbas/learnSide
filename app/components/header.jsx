"use client";

import TestimonialCard from "./TestimonialCard";

const Header = () => {
    return (
        <div className="w-full bg-[#0F243D] bg-opacity-30 shadow-md font-Inter flex justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center p-6 w-full max-w-[1290px]">
                <div className="max-w-lg text-center md:text-left space-y-4">
                    <h2 className="font-inter font-bold text-white text-[50px] leading-[63px] tracking-[-0.02em]">
                        <span className="text-blue-500 font-inter font-bold text-[50px] leading-[63px] tracking-[-0.02em]">Hey</span>Learn
                        <span className="text-blue-500 font-inter font-bold text-[50px] leading-[63px] tracking-[-0.02em]">2</span>Code’s <br />
                        Full Stack Coding <br /> Bootcamp
                    </h2>

                    <p className="text-[10px] sm:text-sm leading-6 text-[#F0F3FF]">
                        Become a Full-Stack Developer in 4 Months and get a <br /> developer job. If not, it is 100% FREE.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className=" px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            Apply Now
                        </button>
                        <button className="px-4 py-2 text-sm font-medium bg-white text-[#0F243D] rounded-md transition">
                            Get Free Access
                        </button>
                    </div>

                    <p className="text-[13px] sm:text-sm leading-6 text-[#F0F3FF]">
                        ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
                    </p>

                    <div className="border border-[#1D436F] rounded-lg p-3 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-3 lg:gap-6 text-[#F0F3FF]">
                        {[
                            "Get developer job or it’s 100% free",
                            "Learn practical coding skills with real projects",
                            "Mentorship & Career support included",
                            "Flexible learning schedule",
                        ].map((text, index) => (
                            <div key={index} className="flex items-center gap-2 text-[9px] md:text-[10px]">
                                <span className="w-1 h-10 bg-[#1D436F] hidden lg:inline-block"></span>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 md:mt-0">
                    <TestimonialCard />
                </div>
            </div>
        </div>
    );
};

export default Header;
