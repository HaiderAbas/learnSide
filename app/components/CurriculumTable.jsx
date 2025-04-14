"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const CurriculumTable = () => {
    const [selectedCol, setSelectedCol] = useState(2);

    const headings = ["Feature", "Full-Time", "Part-Time"];

    const BlueTick = (
        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F1F1F1] mx-auto">
            <FaCheck className="text-[#4183F5] text-[11px]" />
        </div>
    );

    const data = [
        ["Duration", "3-4 months", "3-4 months"],
        ["Access to All Coding Projects", BlueTick, BlueTick],
        ["Cost", "USD 1.15-1.6K", "USD 1.15-1.6K"],
        ["Career Coaching", BlueTick, BlueTick],
        ["Career Prep", BlueTick, BlueTick],
        ["Real-life Project for Business", BlueTick, BlueTick],
        ["Build Capstone Projects (AI Chatbot, E-commerce Marketplace)", BlueTick, BlueTick],
        ["Build AI Projects", BlueTick, BlueTick],
    ];

    return (
        <div className="bg-[#F7F8F9]">
            <div className='py-12 w-full lg:max-w-[1150px] mx-auto'>
                <h2 className='text-[#000000] text-4xl font-bold mb-4 leading-12'>
                    Full-Time vs Part-Time <br /> Curriculum
                </h2>
                <p className='font-inter text-[#0F243DCC] font-normal text-[14px] leading-6 tracking-[0%] pb-6'>
                    Our bootcamp is only $500, <br /> a 90% discount from the regular price of $5,000. And, if you don’t land a job after completing our program, you get a full refund. <br /> 100% risk-free
                </p>

                <div className="overflow-x-auto lg:overflow-x-visible rounded-xl border border-gray-200 shadow-lg">
                    <table className="min-w-full border-collapse text-left text-sm text-gray-800 font-inter bg-white">
                        <thead>
                            <tr>
                                {headings.map((heading, idx) => (
                                    <th
                                        key={idx}
                                        onClick={() => idx !== 0 && setSelectedCol(idx)}
                                        className={`px-4 py-3 font-semibold border border-gray-200 transition-all cursor-pointer 
                                        ${idx === 0
                                                ? "bg-white text-left"
                                                : selectedCol === idx
                                                    ? "bg-blue-600 text-white text-center"
                                                    : "bg-gray-100 hover:bg-blue-100 text-center"
                                            }`}
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, rowIdx) => (
                                <tr key={rowIdx} className="bg-white">
                                    {row.map((cell, colIdx) => (
                                        <td
                                            key={colIdx}
                                            className={`px-4 py-4 border border-gray-200 text-[9px] sm:text-base 
                                            ${colIdx === 0 ? "text-left" : "text-center"}`}
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CurriculumTable;
