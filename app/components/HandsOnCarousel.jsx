import Image from 'next/image'
import React from 'react'
import CarouselImage1 from "../../public/images/CarouselImages/react.png"
import CarouselImage2 from "@/public/images/CarouselImages/CarouselImage.png"
import CarouselImage3 from "@/public/images/CarouselImages/CarouselImage2.png"
import CarouselImage4 from "@/public/images/CarouselImages/CarouselImage3.png"
import CarouselImage5 from "@/public/images/CarouselImages/CarouselImage4.png"
import CarouselImage6 from "@/public/images/CarouselImages/CarouselImage5.png"
import CarouselImage7 from "@/public/images/CarouselImages/css.png"
import CarouselImage8 from "@/public/images/CarouselImages/GitHub.png"
import CarouselImage9 from "@/public/images/CarouselImages/UiUX.png"
import Marquee from 'react-fast-marquee'


const Images = [
    { src: CarouselImage1, alt: "Carousel Image 1" },
    { src: CarouselImage2, alt: "Carousel Image 2" },
    { src: CarouselImage8, alt: "GitHub Logo" },
    { src: CarouselImage3, alt: "Carousel Image 3" },
    { src: CarouselImage4, alt: "Carousel Image 4" },
    { src: CarouselImage5, alt: "Carousel Image 5" },
    { src: CarouselImage6, alt: "Carousel Image 5" },
    { src:CarouselImage7, alt: "CSS Logo" },
    { src: CarouselImage8, alt: "GitHub Logo" },
    { src: CarouselImage4, alt: "Carousel Image 4" },
    { src: CarouselImage9, alt: "UI/UX Icon" }
]

const HandsOnCarousel = () => {
    return (
        <div className='bg-[#0C6FE0]'>
            <div className='py-12 w-full lg:max-w-[1150px] mx-auto'>
                <h3 className="text-white text-4xl font-bold mb-4">100% Money-back <br /> Guarantee</h3>
                <p className='font-Inter text-[#FFFFFF]  font-normal text-[14px] leading-6 tracking-[0%]'>
                    We're that confident in our program that we offer this insane money <br />
                    -back guarantee.</p>

            </div>

            <div className="flex justify-around overflow-x-auto py-9">
            <Marquee>
                {Images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        width={192}
                        height={192}
                        className="rounded-xl m-5 max-w-[108px] max-h-[108px]"
                    />
                ))}
                </Marquee>

            </div>
        </div>
    )
}

export default HandsOnCarousel