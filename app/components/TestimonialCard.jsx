"use client";
import { useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import Image from "next/image";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const testimonials = [
    {
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        name: "Kris Steigerwald",
        text: "This bootcamp completely changed my life. The projects were real and helped me land a dev job.",
        avatar: "/images/card.png",
    },
    {
        video: "https://www.w3schools.com/html/movie.mp4",
        name: "Jane Doe",
        text: "Fantastic mentors and practical content. Highly recommend!",
        avatar: "/images/card.png",
    },
    {
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        name: "Ali Khan",
        text: "Loved the career support and hands-on projects.",
        avatar: "/images/card.png",
    },
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="relative lg:w-full  flex flex-col ml-5 lg:ml-0 mt-5 lg:m-0 lg:items-center ">
            <div className="relative max-w-[423px] h-80">
                {testimonials.map((testimonial, index) => {
                    const isActive = index === current;
                    const isPrev = index === (current - 1 + testimonials.length) % testimonials.length;
                    const isNext = index === (current + 1) % testimonials.length;

                    return (
                 <div
                 key={index}
                 className={`absolute lg:max-w-[1290px] top-0 rounded-xl border border-purple-300 p-4 bg-white shadow-md transition-all duration-500 ease-in-out
                ${isActive ? "z-30 left-0 scale-100 opacity-100" : ""}
                ${isPrev ? "z-20 lg:left-8 left-8  mt-2 scale-92 opacity-100" : ""}
                ${isNext ? "z-10 lg:left-14 left-14 top-2 scale-88 opacity-100" : ""}
                ${!isActive && !isPrev && !isNext ? "hidden" : ""}
              `}
                            style={{ width: "280px" }}
                        >
                            <div className="relative w-full h-40 rounded-xl overflow-hidden border border-purple-300">
                                <video
                                    src={testimonial.video}
                                    className="w-full h-full object-cover"
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-xl">
                                    <FaPlay className="text-blue-500 text-3xl bg-white p-2 rounded-full" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed mt-2">{testimonial.text}</p>
                            <div className="flex items-center gap-2 mt-4">
                                <Image
                                    src={testimonial.avatar}
                                    alt="User Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full border border-purple-300"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                                    <div className="flex text-blue-500 text-xs">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-4 lg:ml-15">
                <GrFormPreviousLink onClick={prev} className="bg-[#4183F5] rounded-2xl hover:bg-[#92b1e9] text-2xl cursor-pointer	" />
                <GrFormNextLink onClick={next} className="bg-[#4183F5] rounded-2xl hover:bg-[#92b1e9] text-2xl pointer cursor-pointer	" />
            </div>
        </div>
    );
};

export default TestimonialCarousel;
