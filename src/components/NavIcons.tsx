"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import CartModal from './CartModal'

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)


    const router = useRouter()

    // temp 
    const isLoggedIn = false


    const handleProfile = () => {
        if(isLoggedIn){
            router.push("/login")
        }
        setIsProfileOpen((prev) => !prev)
    }


  return (
    <div className='flex items-center gap-4 xl:gap-6'>
        <Image src="/profile.png"
               alt="heart" 
               width={24}
               height={24}
               className='cursor-pointer'
               onClick={handleProfile}
        />
        {isProfileOpen &&
         <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
            <Link href="/">Profile</Link>
            <div className='mt-2 cursor-pointer'>Logout</div>            
        </div>
        }
        <Image src="/notification.png"
               alt="heart"
               width={24}
               height={24} 
               className='cursor-pointer'
         />
        <div className='relative cursor-pointer'>
        <Image src="/cart.png"
               alt="heart"
               width={24}
               height={24}
               className='cursor-pointer'
               onClick={() => setIsCartOpen((prev) => !prev)}
               />
               <div className='absolute -top-4 right-4 w-6 h-6 bg-samad rodded-full text-white text-sm flex items-center justify-center justify-items-center'>2


               </div>
        </div>
        {isCartOpen && <CartModal />}

    </div>
  )
}

export default  NavIcons