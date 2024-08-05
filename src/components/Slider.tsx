"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Ensure Image component is imported correctly

const slides = [
    {
        id: 1,
        title: "Slide 1",
        description: "Slide 1 Description",
        image: "https://picsum.photos/200/300",
        url: "/",
        bgColor: "red"
    },
    {
        id: 2,
        title: "Slide 2",
        description: "Slide 2 Description",
        image: "https://picsum.photos/200/300",
        url: "/",
        bgColor: "blue"
    }
    // Add more slides as needed
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="h-screen overflow-hidden">
            <div className="w-full h-full transition-all ease-in-out duration-1000">
                {slides.map((slide) => (
                    <div
                        className={`${slide.bgColor} w-screen h-full flex flex-col xl:flex-row`}
                        key={slide.id}
                    >
                        {/* Text Container */}
                        <div className="w-full xl:w-1/2 xl:h-full flex flex-col justify-center items-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h2 className="text-5xl xl:text-7xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h2>
                            <Link href={slide.url}>
                                <a className="rounded-full bg-black text-white px-4 py-2">Shop Now</a>
                            </Link>
                        </div>

                        {/* Image Container */}
                        <div className="w-full xl:w-1/2 relative">
                            <Image 
                                src={slide.image}
                                alt={slide.description}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

