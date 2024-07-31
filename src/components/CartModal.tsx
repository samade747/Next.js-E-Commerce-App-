"use client"

import Image from 'next/image'

const CartModal = () => {

  const cartItmes = true

  return (
    <div className='absolute p-4 rounded-lg bg-white bg-white top-12 right-0 flex flex-col gap-6 z-20'>
    {!cartItmes ? (
        <div><p>Cart is empty</p> </div>
    ): (
      <div className="flex gap-4" >
          <Image
          src=" "
          alt="logo"
          width={72}
          height={96}
          className='object-cover rounded-md' />
      
          <div className='flex'>

          {/* TOP */}
          <div className=''></div>

          {/* TITLE */}
          <div className='flex items-center justify-between gap-8'>
          <h1 className='font-weight-bold'>PRODUCT NAME</h1>
          <div className='p-1 bg-gray-200 rounded-sm'>$49</div>
          </div>


          {/* DESC */}
          <div className='text-sm text-gray-500'>
            available in stock
          </div>



          {/* BOTTOM */}
          <div className='flex justify-between text-sm`'>
           <span className='text-gray-500'>Qty 2</span> 
           <span className='text-blue-500'>Remove</span> 

          </div>



          </div>
      </div>


      
    )}
    </div>
  )
}



export default  CartModal