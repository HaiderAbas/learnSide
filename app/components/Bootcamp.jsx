import React from 'react'
import { FaCheckCircle, FaLightbulb, FaRocket } from 'react-icons/fa'
import Card from './Card'

const Bootcamp = () => {
    return (
        <div className='bg-[#FFFFFF]'>
            <div className='max-w-[1290px] p-6'>
                <div className='max-w-[588px] ml-24'>
                    <h2 className='font-inter font-bold text-[38px] leading-12  mb-[10px] tracking-[1%] align-middle capitalize'>Who Is This
                        <br />  <span className='font-inter font-bold text-[#4183F5]  mb-[10px] tracking-[1%] align-middle capitalize'>Bootcamp For?</span> </h2>
                    <p className='font-inter font-normal text-[14px] leading-[29px] tracking-normal'>Feeling stuck in your current career? Whether you’re new to coding <br /> or just need a real-world project push,
                        this bootcamp is for you. With <br /> personalized support and a community of learners, you’ll reach your <br /> goals
                        faster than you think</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ml-19 font-Inter">

                    <Card
                        icon={<FaLightbulb className="w-6 h-6" />}
                        iconBg="bg-[#F5B841]"
                        title={
                            <>
                                Have never Coded before <br /> but want to Learn
                            </>
                        }
                        description="Jumpstart your coding journey with hands-on learning and guidance, perfect for complete beginners."
                        className="rounded-md text-sm shadow-2xl transition-all duration-300 hover:scale-[1.02] "

                    />

                    <Card
                        icon={<FaCheckCircle className="w-6 h-6" />}
                        iconBg="bg-[#41F548]"
                        title={
                            <p className=''>
                                Looking for a career switch <br /> or start-up Builder
                            </p>

                        }
                        description="Turn your ideas into real-world applications by learning to code and create your own solutions"
                        className="rounded-md text-sm shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                    />

                    <Card
                        icon={<h2 className="w-6 h-6" />}
                        iconBg="bg-[#4183F5]"
                        title="Launch Your Career"
                        description="Transition into the tech industry with the skills and confidence needed to land a developer job"
                        className="rounded-md text-sm shadow-2xl transition-all duration-300 hover:scale-[1.02] "
                    />
                </div>
            </div>
        </div>
    )
}

export default Bootcamp