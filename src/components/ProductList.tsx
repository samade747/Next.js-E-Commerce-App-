import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
           <Link href="/test" className='w-full flex flex-col gap-2 sm:w-[25%] lg:w-[20%]'>
            <div className='relative w-full h-80'>
                <Image
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />                            
                
                <Image 
                    src="https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />
                </div>

                <div className='flex justify-between'>
                    <span className='font-semi-bold'>PRODUCT NAME</span>
                    <span className='p-1 bg-gray-200 rounded-sm'>$49</span>                                    
                </div>            

                 <div className='text-sm text-gray-500' >My description  </div>
                <button className='rounded-2xl ring-1 ring-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to cart</button>


               
            </Link>       



            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[25%] lg:w-[20%]'>
            <div className='relative w-full h-80'>
                <Image
                    src="https://images.pexels.com/photos/1799829/pexels-photo-1799829.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />                            
                
                <Image 
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />
                </div>

                <div className='flex justify-between'>
                    <span className='font-semi-bold'>PRODUCT NAME</span>
                    <span className='p-1 bg-gray-200 rounded-sm'>$49</span>                                    
                </div>            

                 <div className='text-sm text-gray-500' >My description  </div>
                <button className='rounded-2xl ring-1 ring-black  py-3 px-4 text-xs hover:bg-black hover:text-white'>Add to cart</button>


               
            </Link>       




            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[25%] lg:w-[20%]'>
            <div className='relative w-full h-80'>
                <Image
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />                            
                
                <Image 
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />
                </div>

                <div className='flex justify-between'>
                    <span className='font-semi-bold'>PRODUCT NAME</span>
                    <span className='p-1 bg-gray-200 rounded-sm'>$49</span>                                    
                </div>            

                 <div className='text-sm text-gray-500' >My description  </div>
                <button className='rounded-2xl ring-1 ring-black  py-3 px-4 text-xs hover:bg-black hover:text-white'>Add to cart</button>


               
            </Link>       




            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[25%] lg:w-[20%]'>
            <div className='relative w-full h-80'>
                <Image
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />                            
                
                <Image 
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='20vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />
                </div>

                <div className='flex justify-between'>
                    <span className='font-semi-bold'>PRODUCT NAME</span>
                    <span className='p-1 bg-gray-200 rounded-sm'>$49</span>                                    
                </div>            

                 <div className='text-sm text-gray-500' >My description  </div>
                <button className='rounded-2xl ring-1 ring-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to cart</button>


               
            </Link>       

        </div>
    )
}   

export default ProductList