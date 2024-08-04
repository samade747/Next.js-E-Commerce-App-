"use client"

import { useState } from "react"

const slides = [
    {
        id: 1,
        description: "Slide 1",
        text: "Slide 1",
        image: "https://picsum.photos/200/300",
        url: "/",
        bgColor: "red"
    },{
        id: 2,
        description: "Slide 2",
        text: "Slide 2",
        image: "https://picsum.photos/200/300",
        url: "/",
        bgColor: "blue"
    },{

    }


];

const Slider = () => {
    const [current, setCurrent] = useState(0)

    return (
        <div className="h=[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full transition-all ease-in-out duration-1000">
                {slides.map((slide => (
                    <div className="w-full h-full" key={slide.id}>
                        <div className="w-full h-full">
                            {/* {text container} */}
                            <h2>{slide.description}</h2>
                            <h2>{slide.description}</h2>


                        </div>

                        <div className="w-full">
                        {/* image Container */}
                        </div>

                        </div>

                    </div>
                    
                    
                )
            )}
            </div>            
        </div>
    )
}   

export default Slider