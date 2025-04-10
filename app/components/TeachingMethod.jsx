import Image from 'next/image'
import React from 'react'
import Teaching from "@/public/images/Teaching.png"
import Teaching2 from "@/public/images/Teaching2.png"

const TeachingMethod = () => {
    return (
        <div className='bg-[#F7F8F9] bg-opacity-30 shadow-md'>
            <div className='  lg:items-center py-12 w-full lg:max-w-[1120px] mx-auto'>
                <div className=' lg:flex lg:justify-between'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-inter font-bold text-[38px] leading-[100%] tracking-[1%] align-middle mb-4'>Our Teaching Method</h2>
                        <p className='font-inter text-[#0F243DCC] font-normal text-[14px] leading-8 tracking-[0%]'>Unlock full access to our bootcamp resources for a limited time <br /> —absolutely free!</p>
                        <ul className="list-disc py-6 text-[#0F243DCC] space-y-4 font-inter font-normal text-[14px] leading-[14px] tracking-wide">
                            <li>You will learn how to build AI products.</li>
                            <li>You will learn how to create a website in less than 30 minutes (which you can sell to businesses).</li>
                            <li>You will learn how to build a Google review filtering system (which you can sell to businesses).</li>
                            <li>ChatGPT is great. We teach you how to properly utilize it for coding!</li>
                        </ul>
                    </div>
                    <Image src={Teaching} alt='TeachingImage' className='max-w-[353px] flex justify-end' />

                </div>
                <div className='lg:flex lg:justify-between'>
                    <Image src={Teaching} alt='TeachingImage' className='max-w-[353px] flex justify-end' />
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-inter font-bold text-[38px] leading-[100%] tracking-[1%] align-middle mb-4'>Career Support</h2>
                        <p className='font-inter text-[#0F243DCC] font-normal text-[14px] leading-8 tracking-[0%]'>Upon graduation, you will get</p>
                        <ul className="list-disc py-6 grid grid-cols-2  text-[#0F243DCC] space-y-4 font-inter font-normal text-[14px] leading-[14px] tracking-wide">
                            <li>A certificate</li>
                            <li>A great recommendation lette</li>
                            <li>Resume templates</li>
                            <li>Cover letter templates</li>
                            <li>Portfolio templates</li>
                            <li>Real interview practice</li>
                            <li>Interview prep material</li>
                            <li>We push you to go for your goals <br /> through calls twice a week</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TeachingMethod