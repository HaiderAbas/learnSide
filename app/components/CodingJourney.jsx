import React from 'react'
import Button from './Button'
import { FaCheckCircle, FaLightbulb } from 'react-icons/fa'
import Card from './Card'

const CodingJourney = () => {
    return (
        <div className='bg-[#F7F8F9]'>
            <div className='py-12 w-full  lg:max-w-[1150px] mx-auto'>
                <h2 className='text-[#000000] text-4xl font-bold mb-4'>How to Get Started?</h2>
                <div className='flex justify-between'>
                    <p className='font-inter text-[#0F243DCC] font-normal text-[14px] leading-6 tracking-[0%]'>
                        Start Your Coding Journey in 3 Simple Steps</p>
                    <Button className='bg-[#4183F5] text-white' baseStyle size="md" label="Apply Now" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-9 font-inter">
                    <Card
                        icon={<h2 className="w-6 h-6 flex justify-center items-center font-bold text-[#FFFFFF]" >02</h2>}
                        iconBg="bg-[#F5B841]"
                        title="Fill out the application form"
                        description="No experience? No problem. We’ll get back to you within 5 days"
                        className="rounded-lg text-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] p-6"
                    />

                    <Card
                        icon={<h2 className="w-6 h-6 flex justify-center items-center font-bold text-[#FFFFFF]" >02</h2>}
                        iconBg="bg-[#41F548]"
                        title="Interview"
                        description="We’ll have a quick chat to understand your goals and ensure the bootcamp is a good fit"
                        className="rounded-lg bg-white text-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] p-6"
                    />

                    <Card
                        icon={<h2 className="w-6 h-6 flex justify-center items-center font-bold text-[#FFFFFF]" >02</h2>}
                        iconBg="bg-[#4183F5]"
                        title="Acceptance"
                        description="If selected, you’ll get immediate access to pre-bootcamp materials and a setup guide"
                        className="rounded-lg bg-white text-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] p-6"
                    />
                </div>
            </div>
        </div>
    )
}

export default CodingJourney