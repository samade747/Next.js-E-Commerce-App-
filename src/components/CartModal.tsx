"use client"

import Image from 'next/image'

const CartModal = () => {

  const cartItmes = true

  return (
    <div className='absolute p-4 rounded-lg bg-white bg-white top-12 right-0 flex flex-col gap-4'>
    {!cartItmes ? (
        <div>
          <p>Cart is empty</p>
        </div>
    ): (
      <div className: "flex flex-col" >
          <Image src={"/logo.png"} alt="logo" width={24} height={24}>
      </div>
    )}


    </div>
  )
}

export default  CartModal