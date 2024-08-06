import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
           <Link href="/test" className=' '>
            <div className='relative w-full h-80'>
                <Image
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='25vw'
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'  
                />                            
                
                <Image 
                    src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill 
                    sizes='25vw'    
                />
                </div>




            </Link>             
            
        </div>
    )
}   

export default ProductList