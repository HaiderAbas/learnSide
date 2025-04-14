"use client"
import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const FAQSDATA = [
    {
        title: "Do I need any coding experience to join the bootcamp?",
        Desc: "Nope! This bootcamp is designed for beginners. You’ll start from the basics and move your way up to real-world projects."
    },
    {
        title: "What if I don’t land a job after the bootcamp?",
        Desc: "You’ll get a full refund — 100% risk-free if you don’t land a job after completing all the requirements."
    },
    {
        title: "How long is the bootcamp?",
        Desc: "The bootcamp lasts 12 weeks full-time or 24 weeks part-time, depending on the track you choose."
    },
    {
        title: "What is the cost of the bootcamp?",
        Desc: "It’s only $500 — a 90% discount from our usual $5,000 pricing, with a money-back guarantee."
    },
    {
        title: "Will I get a certificate?",
        Desc: "Yes! You’ll receive a certificate upon successful completion of the bootcamp."
    },
]

const FAQS = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className='bg-[#F7F8F9] py-10'>
            <div className='max-w-[1150px] px-4 md:px-0 mx-auto'>
                <h2 className='text-3xl md:text-4xl text-black font-bold font-inter mb-2'>
                    Frequently asked questions
                </h2>
                <p className='font-Inter text-[#0F243DCC] font-normal text-[14px] leading-6 mb-8'>
                    Got questions? We’ve got answers! Here's everything you need to know before joining.
                </p>

                <div className='space-y-4'>
                    {FAQSDATA.map((faq, index) => (
                        <div key={index} className='bg-white rounded-md shadow p-4'>
                            <div
                                className='flex justify-between items-center cursor-pointer'
                                onClick={() => toggle(index)}
                            >
                                <h3 className='text-[#0F243D] font-semibold'>{faq.title}</h3>
                                {activeIndex === index ? (
                                    <MdKeyboardArrowUp className="text-xl text-[#0F243D]" />
                                ) : (
                                    <MdKeyboardArrowDown className="text-xl text-[#0F243D]" />
                                )}
                            </div>
                            {activeIndex === index && (
                                <p className='text-sm text-[#0F243DCC] mt-3'>{faq.Desc}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQS
