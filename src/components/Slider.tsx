"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Slide 1",
        description: "Slide 1 Description",
        image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "/",
        bgColor: "white"
    },
    {
        id: 2,
        title: "Slide 2",
        description: "Slide 2 Description",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "/",
        bgColor: "pink"
    },
    {
        id: 3,
        title: "Slide 3",
        description: "Slide 3 Description",
        image: "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "/",
        bgColor: "purple"
    },
    {
        id: 4,
        title: "Slide 4",
        description: "Slide 4 Description",
        image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "/",
        bgColor: "black"
    },
    {
        id: 5,
        title: "Slide 5",
        description: "Slide 5 Description",
        image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "/",
        bgColor: "white"
    },
    
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 1000); 

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden relative">
            <div 
                className="w-max h-full flex transition-transform ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        className={`w-screen h-full flex flex-col xl:flex-row`}
                        style={{ backgroundColor: slide.bgColor }}
                        key={slide.id}
                    >
                        {/* Text Container */}
                        <div className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center gap-8 2xl:gap-12 text-center p-4 ">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h2 className="text-5xl xl:text-7xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h2>
                            <Link href={slide.url}>
                                <button className="rounded-full bg-black text-white px-4 py-3">Shop Now</button>
                            </Link>
                        </div>

                        {/* Image Container */}
                        <div className="w-full xl:w-1/2 h-1/2 xl:h-full relative">
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
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
                <button
                    className="z-10 p-2 bg-black text-white rounded-full"
                    onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
                >
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
                </button>
                <button
                    className="z-10 p-2 bg-black text-white rounded-full"
                    onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}
                >
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
                </button>
            </div>
        </div>
    );
};

export default Slider;
