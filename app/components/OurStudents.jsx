import React from 'react';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';
import studentProfile from "@/public/images/students/image.png"
import studentProfile1 from "@/public/images/students/image1.png"
import studentProfile2 from "@/public/images/students/image2.png"
import studentProfile3 from "@/public/images/students/image3.png"
import studentProfile4 from "@/public/images/students/image4.png"
import Image from 'next/image';

const StudentsData = [
    {
        icon: FaQuoteLeft,
        desc: "This bootcamp transformed my career! The curriculum was intense but incredibly effective. I landed a job just two weeks after graduating.",
        profile: studentProfile,
        name: "John Doe",
        stars: 5
    },
    {
        icon: FaQuoteLeft,
        desc: "A life-changing experience. I went from zero to full-stack developer in just a few months.",
        profile: studentProfile1,
        name: "Jane Smith",
        stars: 4
    },
    {
        icon: FaQuoteLeft,
        desc: "A life-changing experience. I went from zero to full-stack developer in just a few months.",
        profile: studentProfile3,
        name: "Jane Smith",
        stars: 3
    },
    {
        icon: FaQuoteLeft,
        desc: "A life-changing experience. I went from zero to full-stack developer in just a few months.",
        profile: studentProfile4,
        name: "Jane Smith",
        stars: 2
    },
    {
        icon: FaQuoteLeft,
        desc: "A life-changing experience. I went from zero to full-stack developer in just a few months.",
        profile: studentProfile2,
        name: "Jane Smith",
        stars: 1
    },
    {
        icon: FaQuoteLeft,
        desc: "A life-changing experience. I went from zero to full-stack developer in just a few months.",
        profile: studentProfile,
        name: "Jane Smith",
        stars: 5
    },
];

const OurStudents = () => {


    const StarRating = ({ stars }) => (
        <div className="flex text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) =>
                i < stars ? <FaStar key={i} /> : <FaRegStar key={i} />
            )}
        </div>

    );
    return (
        <div className="p-6 md:p-12 bg-[#0F243D]">
            <div className='lg:max-w-[1150px] w-full py-6 mx-auto'>
                <div className="mb-10  text-center">
                    <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight font-inter mb-2">
                        What Our Students <br /> Are Saying
                    </h2>
                    <p className="text-sm md:text-base text-[#FAFAFA] mt-4 font-normal leading-relaxed font-Inter">
                        Real experiences, real results. Hear from students who have transformed <br /> their careers with our bootcamp.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {StudentsData.map((student, index) => {
                        const Icon = student.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative">
                                <Icon className="text-[#4183F5] text-2xl mb-4" />
                                <p className="text-sm text-[#0F243D] mb-4">{student.desc}</p>

                                <div className="flex items-center gap-4">
                                    <Image
                                        src={student.profile}
                                        alt={student.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-[#0F243D] font-semibold text-sm">{student.name}</h4>
                                        <StarRating stars={student.stars} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default OurStudents;
