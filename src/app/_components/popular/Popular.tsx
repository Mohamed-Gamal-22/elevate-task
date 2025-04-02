import Image from 'next/image'
import React from 'react'
import img from "../../../public/assets/images/02.png.png"
import img2 from "../../../public/assets/images/image 24.png";
import img3 from "../../../public/assets/images/image 25.png";
import img4 from "../../../public/assets/images/mug.png";
import { BriefcaseBusiness, Eye, Heart, Star } from 'lucide-react'

export default function Popular() {
  return <>
    <h2 className='text-3xl font-bold mt-12 mb-8'>Popular Items</h2>
    <div className="flex flex-wrap p-3 products gap-y-8">

        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img3} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img4} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img2} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img3} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img4} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img2} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img3} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img4} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img2} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
        <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <Image src={img} alt="watch" className='w-full h-[220px] object-contain'/>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold'>Spicial Gift Box</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                        <Star className='text-sm text-yellow-400'/>
                    </div>
                    <p>price : $250.00</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>
 

    </div>
  </>
}
