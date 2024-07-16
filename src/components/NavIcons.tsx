"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)


    const router = useRouter()

    // temp 
    const isLoggedIn = false


    const handleProfile = () => {
        if(isLoggedIn){
            setIsProfileOpen(prev => !prev)
        }
    }


  return (
    <div className='flex items-center gap-4 xl:gap-6'>
        <Image src="/profile.png" alt="heart" width={24} height={24} className='cursor-pointer' />

        {isProfileOpen && <div className=''>
            <Link href="/">Profile</Link>
            <div className='mt-2 cursor-pointer'>
                Logout
            </div>
            
        </div>
        }
        <Image src="/notification.png" alt="heart" width={24} height={24} className='cursor-pointer' />
        <Image src="/cart.png" alt="heart" width={24} height={24} className='cursor-pointer' />
    </div>
  )
}

export default  NavIcons