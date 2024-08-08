import Link from 'next/link'
import Image from 'next/image'


const CategoryList = () => {
    return (
        <div className="px-4 overflow-x-scroll">
            <div className="flex gap-4 md:gap-8">
                <Link href="/list?cat=test" className='flex-shrink-0 w-ful sm:w-1/2 lg:w-1/3 flex flex-col'>
                    <div className='relative bg-size-100 w-full h-90'>
                        <Image 
                            src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            fill
                            sizes='25vw'
                            className='object-cover rounded-md'
                            

                        />
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList