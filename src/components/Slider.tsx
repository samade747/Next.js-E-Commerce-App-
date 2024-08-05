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
    },
    {
        id: 3,
        title: "Slide 3",
        description: "Slide 3 Description",
        image: "https://picsum.photos/200/300",
        url: "/",
        bgColor: "green"
    },
    {
        id: 4,
        title: "Slide 4",
        description: "Slide 4 Description",
        image: "https://picsum.photos/200/300",
        url: "/",
        bgColor: "yellow"
    },
    {
        id: 5,
        title: "Slide 5",
        description: "Slide 5 Description",
        image: "https://picsum.photos/200/300",
        url: "/",
        bgColor: "purple"
    },
    // Add more slides as needed
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000">
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
                                <button className="rounded-full bg-black text-white px-4 py-3">Shop Now</button>
                            </Link>
                        </div>

                        {/* Image Container */}
                        <div className="w-full xl:w-1/2 xl:h-full relative">
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

            {/* Previous and Next Buttons */}
            {slides.map((slide, index) => (
                <button
                    className="absolute top-1/2 z-10 -translate-y-1/2"
                    key={slide.id}
                    onClick={() => setCurrent(index)}
                >
                    {current === index ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    ) : (   
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    )}
                </button>
            ))}
        </div>
    );
};

export default Slider;

