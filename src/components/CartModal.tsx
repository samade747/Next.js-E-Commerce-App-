"use client"

import Image from 'next/image'

const CartModal = () => {
  

  const cartItmes = true

  return (
    <>
    <div className='absolute p-4 rounded-lg bg-white top-12 right-0 flex flex-col gap-6 z-20'>
    {!cartItmes ? (
        <div><p>Cart is empty</p> </div>
    ): (
      <div className='flex flex-col gap-8'>
        {/* ITEM */}
      <div className="flex gap-4" >
          <Image
          src="https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="logo"
          width={72}
          height={96}
          className='object-cover rounded-md' />
      
          <div className='flex flex-col justify-between w-full'>

          {/* TOP */}
          <div className=''></div>

          {/* TITLE */}
          <div className='flex items-center justify-between gap-8'>
          <h1 className='font-semi-bold'>PRODUCT NAME</h1>
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
          {/* // BOTTOM */}
          <div className=''>
            <div className='flex items-center justify-between font-semi-bold'>
              <span className=''>Subtotal</span>
              <span className=''>$49</span>              
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>tax included</p>
            <div className='flex justiy-between text-sm gap-2'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gr-500'>View Cart</button>
              <button className='rounded-md py-3 px-4 ring-1 ring-blue-500'>Checkout</button>
            </div>
          </div>


          </div>
      </div>
      </div>

      
      
    )}
    </div>
    </>
     )
}



export default  CartModal