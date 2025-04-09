"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup';

const Hours = () => {
    const [projects] = useState(7);
    const [challenges] = useState(20);
    const [hours] = useState(600);
    return (
        <div className='bg-[#FAFAFA] bg-opacity-30 shadow-md'>
            <div className=' max-w-7xl mx-auto'>
                <div className="flex flex-col  md:flex-row justify-between ml-14 items-center p-6">
                    <div className="max-w-[500px] text-center md:text-left space-y-4">
                        <p className="text-[#0F243DCC] font-medium text-sm">600+ hours of material</p>
                        <h2 className="font-bold text-[#0F243D] text-2xl sm:text-4xl leading-tight">
                            Get Full Bootcamp <br /> Material
                            <span className="text-blue-500"> Access <br /> For Free</span>
                        </h2>

                        <p className="font-inter font-normal text-[14px] leading-[29px] text-[#0F243DCC]">
                            From complete beginner to building full-stack apps with
                            7 real-world projects  (not just a basic to-do list).
                        </p>

                        <p className="font-inter font-normal text-[14px] leading-[29px] text-[#0F243DCC]">
                            Click the button below, fill up a few questions and get your free access!
                            We will email you your login credentials within a day.
                        </p>

                        <button className="px-5 py-3 font-medium bg-[#0F243D] text-white rounded-md hover:bg-[#0F343D] !text-sm transition">
                            Get Free Access
                        </button>
                    </div>

                    <div className=" gap-[40px] rounded-[32px] p-6 sm:p-[24px] md:pr-[32px] md:pl-[32px] bg-[#F3F5F7] shadow-md text-center flex flex-col items-center">
                        <div className="grid grid-cols-1 justify-items-center m-auto sm:grid-cols-2 md:grid-cols-2 gap-2 w-full justify-center items-center">
                            {[
                                { number: hours, label: "Hours of Material" },
                                { number: projects, label: "Projects" },
                                { number: challenges, label: "Challenges" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-lg py-4 px-4 shadow-md flex flex-col items-center justify-center min-h-[150px] sm:h-auto w-full">
                                    <h2 className="text-xl font-bold text-blue-600">
                                        <CountUp start={0} end={parseInt(item.number)} duration={10} separator="," />
                                        {item.label === "Hours of Material" ? "+" : ""}
                                    </h2>
                                    <p className="text-gray-700 text-lg">{item.label}</p>
                                </div>

                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Hours