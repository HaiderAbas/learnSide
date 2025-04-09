import React from 'react'
import { FaCheckCircle, FaLightbulb, FaRocket } from 'react-icons/fa'
import Card from './Card'

const Bootcamp = () => {
  return (
    <div className="bg-[#FFFFFF] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className=" mx-auto mb-10">
          <h2 className="font-inter font-bold text-[38px] leading-[48px] tracking-[1%] capitalize mb-4">
            Who Is This <br />
            <span className="text-[#4183F5]">Bootcamp For?</span>
          </h2>
          <p className="font-inter text-[14px] leading-[29px] text-gray-700">
            Feeling stuck in your current career? Whether you’re new to coding <br />
            or just need a real-world project push, this bootcamp is for you. With <br />
            personalized support and a community of learners, you’ll reach your <br />
            goals faster than you think.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-inter">
          <Card
            icon={<FaLightbulb className="w-6 h-6" />}
            iconBg="bg-[#F5B841]"
            title={
              <>
                Have never Coded before <br /> but want to Learn
              </>
            }
            description="Jumpstart your coding journey with hands-on learning and guidance, perfect for complete beginners."
            className="rounded-lg text-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] p-6"
          />

          <Card
            icon={<FaCheckCircle className="w-6 h-6" />}
            iconBg="bg-[#41F548]"
            title={
              <>
                Looking for a career switch <br /> or start-up builder
              </>
            }
            description="Turn your ideas into real-world applications by learning to code and create your own solutions."
            className="rounded-lg text-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] p-6"
          />

          <Card
            icon={<FaRocket className="w-6 h-6" />}
            iconBg="bg-[#4183F5]"
            title="Launch Your Career"
            description="Transition into the tech industry with the skills and confidence needed to land a developer job."
            className="rounded-lg text-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] p-6"
          />
        </div>
      </div>
    </div>
  )
}

export default Bootcamp
