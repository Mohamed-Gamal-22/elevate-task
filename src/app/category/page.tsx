"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { BriefcaseBusiness, Eye, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { Product } from '@/types/product.type.'
import StarsRating from '../_components/stars-rating/StarsRating'
import { CartContext } from '../context/CartContext'
import Link from 'next/link'

export default function Category() {
    const { addToCard } = useContext<any>(CartContext)
    const [data, setdata] = useState<Product[]>([])
    const [showFilters, setShowFilters] = useState(false)

    async function getProducts() {
        let response = await fetch(`http://localhost:3000/api/categories`)
        let data = await response.json()
        setdata(data.data.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return <>
        <div className="flex flex-col lg:flex-row items-start min-h-screen p-4">
            {/* Toggle Button for Small Screens */}
            <button 
                className="lg:hidden mb-4 px-4 py-2 bg-[#F82BA9] w-full text-white rounded-md"
                onClick={() => setShowFilters(prev => !prev)}
            >
                {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Filters Section */}
            <div className={`filter w-full lg:w-1/5 ${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="Category p-4 mb-8">
                <h2 className='font-bold color-dark border-b-2 pb-3 border-[#757F95]'>Category</h2>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='home' className='border-[#757F95] border-2'/><label htmlFor="home">Home & Living</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='garment' className='border-[#757F95] border-2'/>
                        <label htmlFor="garment">Garment Care</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='jewelry' className='border-[#757F95] border-2'/>
                        <label htmlFor="jewelry">Jewelry & Accessories</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='occasion' className='border-[#757F95] border-2'/>
                        <label htmlFor="occasion">Occasion Gifts</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='office' className='border-[#757F95] border-2'/>
                        <label htmlFor="office">Office & Stationery</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='personalised' className='border-[#757F95] border-2'/>
                        <label htmlFor="personalised">Personalised Gifts</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='box' className='border-[#757F95] border-2'/>
                        <label htmlFor="box">Gifts Box</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='other' className='border-[#757F95] border-2'/>
                        <label htmlFor="other">Other</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
            </div>
            <div className="Brands p-4 mb-8">
                <h2 className='font-bold color-dark border-b-2 pb-3 border-[#757F95]'>Brands</h2>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <label htmlFor="home"></label>
                        <Checkbox className='border-[#757F95] border-2'/><span>Tovola</span>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <label htmlFor="home"></label>
                        <Checkbox className='border-[#757F95] border-2'/><span>Sundoy</span>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <label htmlFor="home"></label>
                        <Checkbox className='border-[#757F95] border-2'/><span>Sahoo Gifts</span>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <label htmlFor="home"></label>
                        <Checkbox className='border-[#757F95] border-2'/><span>Mainden Gifts</span>
                    </div>
                    <span className=''>(8)</span>
                </div>
            </div>
            <div className="Pricing p-4 mb-8">
                <h2 className='font-bold color-dark border-b-2 pb-3 border-[#757F95]'>Price Rating</h2>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='w-full'>
                        <p className='mb-2 color-rose'>$0 - $999999</p>
                        <input type="range" className='w-full color-rose' />
                    </div>
                </div>
            </div>
            <div className="Sales p-4 mb-8">
                <h2 className='font-bold color-dark border-b-2 pb-3 border-[#757F95]'>Sales</h2>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='Sale' className='border-[#757F95] border-2'/>
                        <label htmlFor="Sale">Sale</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='stock' className='border-[#757F95] border-2'/>
                        <label htmlFor="stock">Stock</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='out' className='border-[#757F95] border-2'/>
                        <label htmlFor="out">Out Of Stock</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='Discount' className='border-[#757F95] border-2'/>
                        <label htmlFor="Discount">Discount</label>
                    </div>
                    <span className=''>(8)</span>
                </div>
            </div>
            <div className="Rating p-4 mb-8">
                <h2 className='font-bold color-dark border-b-2 pb-3 border-[#757F95]'>Rating</h2>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='five' className='border-[#757F95] border-2'/>
                    <label className='flex gap-3 items-center' htmlFor="five">
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                    </label>
                    </div>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='four' className='border-[#757F95] border-2'/>
                    <label className='flex gap-3 items-center' htmlFor="four">
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose'/>
                    </label>
                    </div>

                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='three' className='border-[#757F95] border-2'/>
                    <label className='flex gap-3 items-center' htmlFor="three">
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose'/>
                        <Star className='color-rose'/>
                    </label>
                    </div>

                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='two' className='border-[#757F95] border-2'/>
                    <label className='flex gap-3 items-center' htmlFor="two">
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose'/>
                        <Star className='color-rose'/>
                        <Star className='color-rose'/>
                    </label>
                    </div>

                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='one' className='border-[#757F95] border-2'/>
                    <label className='flex gap-3 items-center' htmlFor="one">
                        <Star className='color-rose fill-[#F82BA9]'/>
                        <Star className='color-rose'/>
                        <Star className='color-rose'/>
                        <Star className='color-rose'/>
                        <Star className='color-rose'/>
                    </label>
                    </div>

                </div>
            </div>
            <div className="Color p-4 mb-8">
                <h2 className='font-bold color-dark border-b-2 pb-3 border-[#757F95]'>Color</h2>
                <div className="my-4 text-[14px] flex justify-around items-center text-[#757F95]">
                    <div className='size-7 bg-red-500 rounded-full cursor-pointer'></div>
                    <div className='size-7 bg-blue-500 rounded-full cursor-pointer'></div>
                    <div className='size-7 bg-emerald-500 rounded-full cursor-pointer'></div>
                    <div className='size-7 bg-gray-500 rounded-full cursor-pointer'></div>
                    <div className='size-7 bg-violet-500 rounded-full cursor-pointer'></div>
                </div>
            </div>
            <div className="Size p-4 mb-8">
                <h2 className='font-bold color-dark border-b-2 pb-3 border-[#757F95]'>Size</h2>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='extra_small' className='border-[#757F95] border-2'/>
                        <label htmlFor="extra_small">Extra Small</label>
                    </div>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='small' className='border-[#757F95] border-2'/>
                        <label htmlFor="small">Small</label>
                    </div>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='Medium' className='border-[#757F95] border-2'/>
                        <label htmlFor="Medium">Medium</label>
                    </div>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='Large' className='border-[#757F95] border-2'/>
                        <label htmlFor="Large">Large</label>
                    </div>
                </div>
                <div className="my-4 text-[14px] flex justify-between items-center text-[#757F95]">
                    <div className='flex gap-3 items-center'>
                        <Checkbox id='Extra_Large' className='border-[#757F95] border-2 accent-rose-500'/>
                        <label htmlFor="Extra_Large">Extra Large</label>
                    </div>
                </div>
            </div>
            </div>

            {/* Products Section */}
            <div className="flex w-full lg:w-4/5 flex-wrap p-3 products gap-y-4">
                {data?.map((product) => (
                    <Link href={`/product-details/?${product._id}`} key={product._id} className='w-full sm:w-1/2 lg:w-1/3 relative p-3 block'>
                        <div className="main relative">
                            <div className={`relative w-full h-[250px]`}>
                                <Image
                                    src={product.imgCover}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className='rounded-[20px]'
                                />
                            </div>
                            <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                                <div className='bg-[#F82BA9] p-1 rounded-full'>
                                    <Eye className='size-8 rounded-full text-white cursor-pointer' />
                                </div>
                                <div className='bg-[#F82BA9] p-1 rounded-full'>
                                    <Heart className='size-8 rounded-full text-white cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <h3 className='font-bold'>{product.title}</h3>
                        <div className="footer flex justify-between items-center">
                            <div className="left">
                                <div className="stars flex gap-1 my-2">
                                    <StarsRating product={product} />
                                </div>
                                <p className="color-rose">price : ${product.price}</p>
                            </div>
                            <div onClick={(e) => {
                                e.preventDefault();
                                addToCard(product._id);
                            }}
                                className="right bg-[#8C52FF] text-white p-2 rounded-full cursor-pointer"
                            >
                                <BriefcaseBusiness />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
}
