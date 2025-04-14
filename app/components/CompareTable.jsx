"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ComparisonTable = () => {
    const [selectedCol, setSelectedCol] = useState(2);

    const headings = ["Feature", "Degree / Master’s", "Our Bootcamp", "Other Bootcamp"];

    const BlueTick = (
        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F1F1F1] mx-auto">
            <FaCheck className="text-[#4183F5] text-[11px]" />
        </div>
    );

    const data = [
        ["Coding Hours", "450+", "600+", "450+"],
        ["Total Cost", "USD 80-150K", "USD 1.15-1.6K", "USD 3-20K"],
        ["Cost if Unemployed", "USD 80-150K", "0", "USD 3-20K"],
        ["Time Commitment", "4 years", "3 months", "3 months"],
        ["Number of Students per cohort", "100+", "Max of 6", "15-40"],
        ["Time Commitment", "4 years", "3 months", "3 months"],
        ["Practical Skills", BlueTick, BlueTick, BlueTick],
        ["Career Prep", BlueTick, BlueTick, BlueTick],
        ["Real-life Project for a real business", BlueTick, BlueTick, BlueTick],
    ];

    return (
        <div className='py-12 w-full lg:max-w-[1150px] mx-auto'>
            <h2 className='text-[#000000] text-4xl font-bold mb-4 leading-12'>
                Why It makes Sense <br /> To join Us?
            </h2>
            <p className='font-inter text-[#0F243DCC] font-normal text-[14px] leading-6 tracking-[0%] pb-6'>
                Compare the difference by yourself
            </p>

            <div className="overflow-x-auto lg:overflow-x-visible rounded-xl border border-gray-200 shadow-lg snap-none">
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
                                        className={`px-4 py-4 border border-gray-200 text-[7px] sm:text-base 
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
    );
};

export default ComparisonTable;
