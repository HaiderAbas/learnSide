import React from 'react'
import money_back from "@/public/images/money_back.png"
import Image from 'next/image'
const MoneyBack = () => {
    return (
        <div className='bg-white py-14'>
            <div className="relative bg-[#0E2644] p-6 rounded-md shadow-lg max-w-6xl mt-10 mx-auto">
                <h3 className="text-white text-2xl font-medium mb-4">100% Money-back <br /> Guarantee</h3>
                <p className='font-inter text-[#EEEEEE] font-normal text-[12px] leading-6 tracking-[0%]'>
                    We're that confident in our program that we offer this insane money <br />
                    -back guarantee.</p>
                <div className='flex flex-col justify-start items-start'>
                    <div className='bg-[#0E2644] py-4 pl-3 border border-[#19395F] rounded-md shadow-lg max-w-[575px] mt-10'>
                        <p className='font-inter text-[#EEEEEE] font-normal text-[12px] leading-8 tracking-[0%]'>
                            To qualify, students must meet and maintain eligibility as outlined below:
                        </p>
                        <ul className="list-disc pl-6 text-white space-y-4 font-inter font-normal text-[12px] leading-[11px] tracking-wide">
                            <li>You graduated from our bootcamp and received our certificate.</li>
                            <li>You are of legal working age and have the right to work in your country.</li>
                            <li>You actively look for jobs, and perform the tasks set out by our career team</li>
                        </ul>
                    </div>
                </div>

                <p className='font-inter text-[#EEEEEE] font-normal text-[12px] leading-8 tracking-[0%]'>
                    *If you follow those steps above, but still don't get a tech job, you get a full-refund!</p>

                <Image src={money_back} alt="money_back" className="absolute right-0 bottom-0 sm:top-[314px] lg:top-[66px] max-w-[67px] max-h-[67px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[312px] lg:max-h-[312px]" />

            </div>
        </div>
    )
}

export default MoneyBack