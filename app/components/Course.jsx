import React from 'react'
import Button from './Button'
const Course = () => {
    return (
        <div>
            <div className='py-12 w-full lg:max-w-[1150px] mx-auto'>
                <h2 className='text-[#000000] text-4xl font-bold mb-4'>What You will Learn In <br />
                    <span className='text-[#4183F5] text-4xl font-bold mb-4'>This Course?</span> </h2>
                <div className='flex justify-between'>
                    <p className='font-inter text-[#0F243DCC]  font-normal text-[14px] leading-6 tracking-[0%]'>
                        This is not another theory-heavy course. We focus on doing. <br /> You’ll build real projects, get feedback, and learn by doing
                    </p>
                    <Button className='bg-[#4183F5] text-white' baseStyle size="sm" label="Apply Now" />
                </div>
                <div className="flex flex-col justify-between md:flex-row gap-6 py-10 ">
                    <div className=" py-6 px-4 border border-[#19395F] rounded-md shadow-lg w-full md:w-1/2">
                        <h2 className="font-inter text-[#0F243D] font-semibold text-lg leading-6 mb-4">
                            Technical Skills
                        </h2>
                        <ul className="list-disc pl-6 text-[#0F243DCC] space-y-2 font-inter text-sm leading-5 tracking-wide">
                            <li>Fundamentals (HTML, CSS, JS)</li>
                            <li>Frontend (SvelteKit, NextJS, DaisyUI, shadcn-ui)</li>
                            <li>Backend (NodeJS, SQL, AWS, Docker)</li>
                            <li>Algorithms & Data Structures</li>
                        </ul>
                    </div>
                    <div className=" py-6 px-4 border border-[#19395F] rounded-md shadow-lg w-full md:w-1/2">
                        <h2 className="font-inter text-[#0F243D] font-semibold text-lg leading-6 mb-4">
                            Course Breakdown
                        </h2>
                        <ul className="list-disc pl-6 text-[#0F243DCC] space-y-2 font-inter text-sm leading-5 tracking-wide">
                            <li>Weeks 1-3: Fundamentals</li>
                            <li>Weeks 4-6: Frontend</li>
                            <li>Weeks 7-9: Backend</li>
                            <li>Weeks 10-12: Self-paced</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#4183F5] p-8 rounded-md shadow-lg max-w-6xl mx-auto">
                    <h3 className="text-white text-2xl font-bold mb-4">Admission Requirements </h3>
                    <p className='font-inter text-[#FFFFFF]  font-normal text-[14px] leading-6 tracking-[0%]'>
                    Only admission requirement For our bootcamp is <strong>proven motivation <br /> to learn</strong> that’s it ... but take it seriously 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Course