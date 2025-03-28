"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="w-full bg-[#0F243D] bg-opacity-30 shadow-md">
                <nav className="flex justify-between items-center px-6 py-3">
                    <div>
                        <Image src={logo} alt="Company Logo" width={120} height={70} />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-2 py-1 font-Inter text-[13px] font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition border-none outline-none">
                            Apply Now
                        </button>
                        <button
                            aria-label="Open menu"
                            className="text-2xl text-white"
                            onClick={() => setIsOpen(true)}
                        >
                            <IoMenu />
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-[#0F243D] text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 shadow-lg z-50`}
            >
                <button
                    aria-label="Close menu"
                    className="absolute top-4 right-4 text-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    <IoClose />
                </button>
                <div className="p-6 flex flex-col gap-4 mt-10">
                    <Link href="#" className="hover:text-gray-300">Our Founder</Link>
                    <Link href="#" className="hover:text-gray-300">Our Cohorts</Link>
                    <Link href="#" className="hover:text-gray-300">Bootcamp</Link>
                    <Link href="#" className="hover:text-gray-300">Choose HeyLearn2Code</Link>
                    <Link href="#" className="hover:text-gray-300">Career Support</Link>


                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

        </>
    );
};

export default Navbar;
