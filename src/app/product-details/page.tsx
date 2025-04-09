import React from 'react'
import watch from "../../public/assets/images/Link.png";
import img2 from "../../public/assets/images/02.png.png";
import img3 from "../../public/assets/images/03.png.png";
import Image from 'next/image';
import { BriefcaseBusiness, Eye, Heart, Play, Star } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import style from "./productDetails.module.css"

export default function ProductDetails() {
  return <>
    <div className='container w-[80%] mx-auto flex flex-wrap'>
        <div className="image w-1/3 p-8 relative">
            <Image src={img2} alt="watch" className='w-full' />
            <div className="another flex p-6 justify-around">
                <div className="p-1">
                    <Image src={watch} alt="watch" className='w-full'/>
                </div>
                <div className="p-1">
                    <Image src={img2} alt="img2" className='w-full'/>
                </div>
                <div className="p-1">
                    <Image src={img3} alt="img3" className='w-full'/>
                </div>
                <div className="p-1">
                    <Image src={watch} alt="watch" className='w-full'/>
                </div> 
            </div>
            <Play className="absolute top-0 end-0 cursor-pointer text-slate-800" />
        </div>
        <div className="details w-2/3 px-8">
            <h2 className='text-dark text-[25px] font-bold '>Special Gift Box</h2>
            <div className='flex gap-2 items-center my-7'>
                <span className='text-[18px] font-[500] text-[#757F95] line-through'>$690</span>
                <span className='text-[23px] font-[500] color-rose'>$650</span>
                <span className='text-[15px] font-[500] text-[#F05454]'>30% off</span>
            </div>
            <p className='leading-7 text-[#757F95]'>
                There are many variations of passages of Lorem Ipsum available, but the majority have <br />
                suffered alteration in some form, by injected humour, or randomised words which don't
                <br />
                look even slightly believable.
            </p>
            <div className="info flex justify-between my-7">
                <div className="quantity w-1/4">
                    <h3 className='my-3 text-[#757F95]'>Quantity</h3>
                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 color-rose  focus:outline-none" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                            </svg>
                        </button>
                        <div>
                            <span className='color-rose'>1</span>
                        </div>
                        <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium color-rose" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="size w-1/4">
                    <h3 className='my-3 text-[#757F95]'>Size</h3>
                    <Select>
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Choose Size" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sm">Small</SelectItem>
                            <SelectItem value="lg">Large</SelectItem>
                            <SelectItem value="xl">Xlarge</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="color w-1/4">
                    <h3 className='my-3 text-[#757F95]'>Color</h3>
                    <div className="balls flex gap-1">
                        <div className="size-6 bg-red-500 rounded-full cursor-pointer"></div>
                        <div className="size-6 bg-blue-500 rounded-full cursor-pointer"></div>
                        <div className="size-6 bg-emerald-500 rounded-full cursor-pointer"></div>
                        <div className="size-6 bg-gray-500 rounded-full cursor-pointer"></div>
                        <div className="size-6 bg-yellow-500 rounded-full cursor-pointer"></div>
                    </div>
                </div>
            </div>
            <ul className='text-[#757F95] list-disc'>
                <li className='mb-3'><span className='font-bold'>Stoke: </span>Avilable</li>
                <li className='mb-3'><span className='font-bold'>SKU: </span>266TYFD</li>
                <li className='mb-3'><span className='font-bold'>Category: </span>Jewelry & Accessories</li>
                <li className='mb-3'><span className='font-bold'>Brand: </span>Novak</li>
                <li className='mb-3'><span className='font-bold'>Tags: </span>Gifts, Watch, Modern, Shop</li>
            </ul>
            <div className='flex items-center gap-4'>
            <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8'><BriefcaseBusiness />Add To Cart</Button>
            <div className='size-9 flex items-center justify-center bg-rose text-white rounded-full'><Heart /></div>
          </div>
        </div>

        <div className='mt-12 w-full'>
            <h2 className={`${style.test} text-3xl font-bold mt-12 mb-8`}>Related Items</h2>
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
            </div>
        </div>
    </div>
  </>
}
