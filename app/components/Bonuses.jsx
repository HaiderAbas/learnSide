import React from 'react'
import Card from './Card'
import {
    FaCheckCircle,
    FaLightbulb,
    FaRegCheckCircle,
    FaRegLightbulb,
    FaRocketchat,
} from 'react-icons/fa'

const cardData = [
    {
        icon: <FaRegLightbulb className="w-6 h-6" />,
        iconBg: 'bg-[#F5B841]',
        title: (
            <p className="text-white text-base font-medium leading-">
                Have never Coded before <br /> but want to Learn
            </p>
        ),
        description: (
            <p className="text-[#F1F1F1] text-sm font-normal leading-relaxed">
                Jumpstart your coding journey with hands-on learning and guidance, perfect for complete beginners.
            </p>
        ),
    },
    {
        icon: <FaRegCheckCircle className="w-6 h-6" />,
        iconBg: 'bg-green-200 text-green-700',
        title: (
            <p className="text-white text-base font-medium leading-">
                Looking for a career switch <br /> or startup builder
            </p>
        ),
        description: (
            <p className="text-[#F1F1F1] text-sm font-normal leading-relaxed">
                Get solid with foundational skills and build mini projects.
            </p>
        ),
    },
    {
        icon: <FaRocketchat className="w-6 h-6" />,
        iconBg: 'bg-purple-100 text-purple-700',
        title: (
            <p className="text-white text-base font-medium leading-">
                Ready to level up <br /> your skills?
            </p>
        ),
        description: (
            <p className="text-[#F1F1F1] text-sm font-normal leading-relaxed">
                Advance your knowledge with real-world projects and mentorship.
            </p>
        ),
    },
    {
        icon: <FaRocketchat className="w-6 h-6" />,
        iconBg: 'bg-purple-100 text-purple-700',
        title: (
            <p className="text-white text-base font-medium leading-">
                Ready to level up <br /> your skills?
            </p>
        ),
        description: (
            <p className="text-[#F1F1F1] text-sm font-normal leading-relaxed">
                Advance your knowledge with real-world projects and mentorship.
            </p>
        ),
    },
    {
        icon: <FaRocketchat className="w-6 h-6" />,
        iconBg: 'bg-purple-100 text-purple-700',
        title: (
            <p className="text-white text-base font-medium leading-">
                Ready to level up <br /> your skills?
            </p>
        ),
        description: (
            <p className="text-[#F1F1F1] text-sm font-normal leading-relaxed">
                Advance your knowledge with real-world projects and mentorship.
            </p>
        ),
    },
    {
        icon: <FaRocketchat className="w-6 h-6" />,
        iconBg: 'bg-purple-100 text-purple-700',
        title: (
            <p className="text-white text-base font-medium leading-">
                Ready to level up <br /> your skills?
            </p>
        ),
        description: (
            <p className="text-[#F1F1F1] text-sm font-normal leading-relaxed">
                Advance your knowledge with real-world projects and mentorship.
            </p>
        ),
    },
];


const Bonuses = () => {
    return (
        <div className="py-12 px-4 bg-[#0F243D]">
            <div className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-[#FFFFFF] font-bold leading-tight font-inter mb-4">
                    Why Choose <br />
                    <span className="text-[#4183F5]">Hey</span>
                    Learns
                    <span className="text-[#4183F5]">2</span>
                    Code?
                </h2>
                <p className="text-sm text-[#FAFAFA] md:text-sm font-normal leading-relaxed font-inter">
                    Other bootcamps leave you to figure things out on <br className="hidden sm:block" />
                    your own. Not us.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
                {cardData.map((item, index) => (
                    <Card
                        key={index}
                        icon={item.icon}
                        iconBg={item.iconBg}
                        title={item.title}
                        description={item.description}
                        className="rounded-md text-sm bg-[#0E2644] w-full shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                    />
                ))}
            </div>
            <div className="bg-[#0E2644] p-6 rounded-md shadow-lg max-w-6xl mt-10 mx-auto">
                <h3 className="text-white text-2xl font-medium mb-4">Bonuses</h3>
                <ul className="list-disc pl-6 text-white space-y-4 font-inter font-normal text-[14px] leading-[39px] tracking-wide">
                    <li>You will learn how to build AI products.</li>
                    <li>You will learn how to create a website in less than 30 minutes (which you can sell to businesses).</li>
                    <li>You will learn how to build a Google review filtering system (which you can sell to businesses).</li>
                    <li>ChatGPT is great. We teach you how to properly utilize it for coding!</li>
                </ul>
            </div>

        </div>
    )
}

export default Bonuses
