"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPlay } from "react-icons/fa"
import Founder from "../../public/images/founders.png"

const AboutFounder = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };
    return (
        <div className=" bg-[#0F243D]">
            <div className=" flex-wrap flex justify-around items-center py-11  max-w-7xl mx-auto">
                <div className="relative w-[500px] h-[327px] ">
                    <video
                        ref={videoRef}
                        src="https://cdn.pixabay.com/vimeo/1235685477/abstract-197351.mp4?width=640&hash=7e922d6e3c183bb7c4f663b77a71d2d4b6b00bfb"
                        className="w-full h-full object-cover"
                        controls={isPlaying}
                        poster="https://i.ytimg.com/vi_webp/dQw4w9WgXcQ/maxresdefault.webp" // Custom Poster Image URL
                        />
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 cursor-pointer" onClick={handlePlay}>
                            <div className="w-12 h-10 bg-white/80 rounded flex items-center justify-center hover:scale-110 transition">
                                <FaPlay className="w-6 h-6 text-black" />
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <p className="text-sm text-[#FFFFFF] mb-1">About Founder</p>
                    <h2 className="text-3xl font-bold text-[#FFFFFF] mb-4">Our Founder</h2>
                    <p className="text-sm text-[#FFFFFF] mb-2">
                        Hey peeps, I'm Shaun, Founder of “HeyLearn2Code”
                    </p>
                    <p className="text-sm !font-thin text-[#E9EAEB]">
                        I started learning to code in April 2023, and by the end of <br /> the year, I had four software developer job offers. Without <br /> a degree.
                        Now, I’m building AI products, including , an <br /> AI SaaS launching Q4 2024.
                        <br /><br />
                        Emphasize your switch from accounting to coding, <br /> showcasing the value of learning tech skills even without <br /> formal education.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default AboutFounder;
