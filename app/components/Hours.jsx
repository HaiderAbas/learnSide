"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup';

const Hours = () => {
    const [projects] = useState(7);
    const [challenges] = useState(20);
    const [hours] = useState(600);
    return (
        <div className='bg-[#FAFAFA] bg-opacity-30 shadow-md'>
            <div className="lg:flex lg:justify-between lg:items-center py-12 w-full lg:max-w-[1290px] mx-auto">
                <div className=" space-y-4 sm:ml-16 lg:m-0">
                    <p className="text-[#0F243DCC] font-medium text-sm">600+ hours of material</p>
                    <h2 className="font-bold text-[#0F243D] text-2xl sm:text-4xl leading-tight">
                        Get Full Bootcamp <br /> Material
                        <span className="text-blue-500"> Access <br /> For Free</span>
                    </h2>

                    <p className="font-inter font-normal text-[14px] leading-[29px] text-[#0F243DCC]">
                        From complete beginner to building full-stack apps <br /> with
                        7 real-world projects  (not just a basic to-do list).
                    </p>

                    <p className="font-inter font-normal text-[14px] leading-[29px] text-[#0F243DCC]">
                        Click the button below, fill up a few questions and get your free <br /> access!
                        We will email you your login credentials within a day.
                    </p>

                    <button className="px-5 py-3 font-medium bg-[#0F243D] text-white rounded-md hover:bg-[#0F343D] !text-sm transition">
                        Get Free Access
                    </button>
                </div>

                <div className=" rounded-[32px] p-6 bg-[#F3F5F7] shadow-md lg:max-w-[400px]">
                    <div className="grid lg:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full lg:max-w-[95%] mx-auto">
                        {[
                            { number: hours, label: "Hours of Material" },
                            { number: projects, label: "Projects" },
                            { number: challenges, label: "Challenges" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg py-6 px-5 shadow-md flex flex-col items-center justify-center max-w-[200px] min-h-[150px] w-full"
                            >
                                <h2 className="text-xl font-bold text-blue-600">
                                    <CountUp start={0} end={parseInt(item.number)} duration={10} separator="," />
                                    {item.label === "Hours of Material" ? "+" : ""}
                                </h2>
                                <p className="text-[#0F243DCC] text-sm text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hours