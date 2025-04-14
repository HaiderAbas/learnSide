import React from 'react'
import Button from './Button'

const PriceCosts = () => {
    return (
        <div className="bg-white bg-opacity-30 shadow-md px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-12 w-full max-w-[1150px] mx-auto gap-8">

                <div className="w-full lg:w-1/2">
                    <h2 className="font-bold text-[#0F243D] text-2xl sm:text-3xl lg:text-4xl leading-tight">
                        How Much does It <br /> Cost?
                    </h2>
                    <ul className="list-disc pl-6 text-[#0F243DCC] space-y-4 font-inter text-sm leading-[20px] tracking-wide mt-4">
                        <li>Our bootcamp is only $500, a 90% discount from the regular price of $5,000.</li>
                        <li>If you don’t land a job after completing our program, you get a full refund. 100% risk-free.</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/3 bg-[#F7F8F9] p-6 rounded-lg shadow-md">
                    <h2 className="text-[#0F243D] font-semibold text-lg">Pricing</h2>
                    <ul className="list-disc pl-6 py-4 text-[#0F243DCC] space-y-4 font-inter text-sm leading-[20px] tracking-wide">
                        <li>Note: this offer is limited make sure to get it asap.</li>
                    </ul>

                    <div className="relative max-w-[350px] bg-[#0F243D] text-white p-4 rounded-lg">
                        <button className="bg-amber-300 text-black font-bold py-1 px-3 rounded absolute top-3 right-3 shadow-sm text-sm">
                            90% OFF
                        </button>
                        <div className="pt-5">
                            <h2 className="font-bold text-lg text-white ">$500 USD /<span className="line-through text-gray-400 text-sm ml-2">$5000 USD</span></h2>
                            <ul className="list-disc pl-6 text-white space-y-4 font-inter text-sm leading-[20px] tracking-wide my-3">
                                <li>Our bootcamp is only $500, a 90% discount <br /> from the regular price of $5,000.</li>
                            </ul>
                            <Button className="bg-[#4183F5] text-white mt-3" baseStyle size="md" label="Apply Now" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PriceCosts
