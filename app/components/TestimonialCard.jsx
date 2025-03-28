"use client";
import Image from "next/image";
import { FaPlay, FaStar } from "react-icons/fa";
import card from "../../public/images/card.png";

const TestimonialCard = () => {
    return (
        <div className="relative w-80 flex flex-col items-center">
            <div className="relative w-72 bg-white shadow-lg rounded-2xl p-4 border border-purple-300 z-20">
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-purple-300">
                    <Image
                        src={card}
                        alt="User Testimonial"
                        layout="fill"
                        objectFit="cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center  bg-opacity-30 rounded-xl">
                        <FaPlay className="text-blue-500 text-3xl bg-white p-2 rounded-full" />
                    </button>
                </div>
                <div className="p-3">
                    <p className="text-xs text-gray-600 leading-relaxed ">
                        "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat. Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat."
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <Image
                            src={card}
                            alt="User Profile"
                            width={40}
                            height={40}
                            className="rounded-full border border-purple-300"
                        />
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm">Kris Steigerwald</h4>
                            <div className="flex text-blue-500 text-xs">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
