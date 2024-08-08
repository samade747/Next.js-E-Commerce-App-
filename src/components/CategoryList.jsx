import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
    return (
        // scrollbar-hide
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-10 ">
                <Link href="/list?cat=test" className='flex-shrink-0 sm:w-1/4 lg:w-1/8 sm-xl:w-1/8 w-20'>
                    <div className='relative w-full h-64'> 
                        <Image 
                            src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            fill
                            sizes='25vw'
                            className='object-cover rounded-md'                          
                            alt="Category Image"
                        />
                    </div>
                    <h1 className='mt-2 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>                                         

                <Link href="/list?cat=test" className='flex-shrink-0 sm:w-1/2 lg:w-1/4 sm-xl:w-1/6 w-20'>
                    <div className='relative w-full h-64'> 
                        <Image 
                            src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            fill
                            sizes='25vw'
                            className='object-cover rounded-md'                          
                            alt="Category Image"
                        />
                    </div>
                    <h1 className='mt-2 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>                                         



                <Link href="/list?cat=test" className='flex-shrink-0 sm:w-1/2 lg:w-1/4 sm-xl:w-1/6 w-20'>
                    <div className='relative w-full h-64'> 
                        <Image 
                            src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            fill
                            sizes='25vw'
                            className='object-cover rounded-md'                          
                            alt="Category Image"
                        />
                    </div>
                    <h1 className='mt-2 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>   

                <Link href="/list?cat=test" className='flex-shrink-0 sm:w-1/2 lg:w-1/4 sm-xl:w-1/6 w-20'>
                    <div className='relative w-full h-64'> 
                        <Image 
                            src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            fill
                            sizes='25vw'
                            className='object-cover rounded-md'                          
                            alt="Category Image"
                        />
                    </div>
                    <h1 className='mt-2 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>     


                <Link href="/list?cat=test" className='flex-shrink-0 sm:w-1/2 lg:w-1/4 sm-xl:w-1/6 w-20'>
                    <div className='relative w-full h-64'> 
                        <Image 
                            src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            fill
                            sizes='25vw'
                            className='object-cover rounded-md'                          
                            alt="Category Image"
                        />
                    </div>
                    <h1 className='mt-2 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>                                       



            </div>


            


        </div>
    )
}

export default CategoryList


// import Link from 'next/link'
// import Image from 'next/image'

// const CategoryList = () => {
//     return (
//         <div className="px-4 overflow-x-scroll scrollbar-hide">
//             <div className="flex gap-4 md:gap-8">

//                 <Link href="/list?cat=test" className='flex-shrink-0 w-ful sm:w-1/2 lg:w-1/4 xl:w-1/6 '>
//                     <div className='relative bg-size-100 w-full h-90'>
//                         <Image 
//                             src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                             fill
//                             sizes='25vw'
//                             className='object-cover rounded-md'                          
//                         />
//                     </div>
//                     <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
//                 </Link>

//                 <Link href="/list?cat=test" className='flex-shrink-0 w-ful sm:w-1/2 lg:w-1/4 xl:w-1/6 '>
//                     <div className='relative bg-size-100 w-full h-90'>
//                         <Image 
//                             src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                             fill
//                             sizes='25vw'
//                             className='object-cover rounded-md'                          
//                         />
//                     </div>
//                     <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
//                 </Link>

//                 <Link href="/list?cat=test" className='flex-shrink-0 w-ful sm:w-1/2 lg:w-1/4 xl:w-1/6 '>
//                     <div className='relative bg-size-100 w-full h-90'>
//                         <Image 
//                             src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                             fill
//                             sizes='25vw'
//                             className='object-cover rounded-md'                          
//                         />
//                     </div>
//                     <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
//                 </Link>

//                 <Link href="/list?cat=test" className='flex-shrink-0 w-ful sm:w-1/2 lg:w-1/4 xl:w-1/6 '>
//                     <div className='relative bg-size-100 w-full h-90'>
//                         <Image 
//                             src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                             fill
//                             sizes='25vw'
//                             className='object-cover rounded-md'                          
//                         />
//                     </div>
//                     <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
//                 </Link>

//             </div>
//         </div>
//     )
// }

// export default CategoryList