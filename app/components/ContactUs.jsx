import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

const ContactUs = () => {
    return (
        <div className="p-6 md:p-12">
            <div className="lg:max-w-[1150px] w-full mx-auto  rounded-xl shadow-md  flex flex-col lg:flex-row justify-between gap-10">

                <div className="flex-1 px-6 py-8">
                    <h2 className="text-3xl md:text-4xl text-black font-bold leading-tight font-inter mb-2">
                        Contact Us
                    </h2>
                    <p className="text-sm md:text-base text-[#0F243DCC] mt-4 font-normal leading-relaxed font-Inter">
                        Email, call or complete the form to learn how <br />
                        <strong>HeyLearn2code</strong> can solve your messaging <br />
                        problem.
                    </p>

                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-xl text-[#0F243D]" />
                            <p className="text-sm md:text-base text-[#0F243DCC] font-normal font-Inter">
                                shaun@heylearn2code.com
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdPhone className="text-xl text-[#0F243D]" />
                            <p className="text-sm md:text-base text-[#0F243DCC] font-normal font-Inter">
                                +53435 53 35
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-[#F7F8F9] px-6 py-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#0F243D] mb-7">
                        Expected Study <br /> Hours
                    </h2>
                    <div className="flex w-1/2 flex-col sm:flex-row items-center bg-[white] p-4 rounded-lg shadow gap-6">
                        <div className="text-center flex-1">
                            <h4 className="font-bold text-[#0F243D]">Full-Time<br />Student</h4>
                            <p className="text-[#0F243DCC] mt-2 text-[12px]">7 hours per day</p>
                        </div>
                        <div className="hidden sm:block w-[1px] h-16 bg-[#0F243D33]"></div>
                        <div className=" text-center flex-1">
                            <h4 className="font-bold text-[#0F243D]">Part-Time<br />Student</h4>
                            <p className="text-[#0F243DCC] mt-2 text-[12px]">3 hours per day</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs
