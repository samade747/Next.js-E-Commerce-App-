"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Correct import for Image component

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <Image 
                src="/menu.png"
                alt="menu"
                width={30}
                height={30}
                className="cursor-pointer" 
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/list">List</Link>
                        </li>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/single">Single</Link>  
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Menu
