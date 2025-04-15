import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-[#0F243D] text-white py-12 px-6">
            <div className="max-w-[890px] mx-auto flex justify-between gap-10">

                {/* Column 1 */}
                <div>
                    <h2 className="font-inter font-bold text-[24px] sm:text-[30px] md:text-4xl leading-[38px] md:leading-[50px] tracking-[-0.02em]">
                        <span className="text-blue-500">Hey</span>Learn
                        <span className="text-blue-500">2</span>Code’s <br />
                        Full Stack Coding <br /> Bootcamp
                    </h2>

                    <p className="text-sm leading-6 text-[#F0F3FF] mt-4">
                        Become a Full-Stack Developer in 4 Months and get a <br /> developer job. If not, it is 100% FREE.
                    </p>

                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-xl text-white" />
                            <p className="text-sm text-[#F0F3FF]">shaun@heylearn2code.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdPhone className="text-xl text-white" />
                            <p className="text-sm text-[#F0F3FF]">+53435 53 35</p>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Site Map</h3>
                    <ul className="space-y-2 text-sm text-[#F0F3FF] ">
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Why Us</li>
                        <li className='cursor-pointer'>Curriculum</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Students</li>
                        <li className='cursor-pointer'>FAQs</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-white hover:text-blue-500">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="#" className="text-white hover:text-pink-500">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="#" className="text-white hover:text-sky-400">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="#" className="text-white hover:text-red-500">
                            <FaYoutube className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-center text-[#F0F3FF] text-xs mt-10">
                © {new Date().getFullYear()} HeyLearn2Code. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
