"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BriefcaseBusiness, Eye, Heart } from 'lucide-react'
import style from "./popular.module.css"
import { Product } from '@/types/product.type.';
import StarsRating from '../stars-rating/StarsRating';

export default function Popular() {

    const [data, setdata] = useState<Product[]>([])

async function getPopular(){
        let response = await fetch(`http://localhost:3000/api/home`)
        let data = await response.json()
        console.log(data.data.products)
        setdata(data.data.products)
      }
    
      useEffect(()=>{
        getPopular()
      }, [])


  return <>

    <div className="container w-[80%] mx-auto mt-20">
        <h2 className={`${style.test} text-3xl font-bold mt-12 mb-8`}>Popular Items</h2>
    </div>
    
    <div className="flex flex-wrap p-3 products gap-y-8 container w-[80%] mx-auto">
        {data?.map((product) => <div className='w-1/4 relative p-3'>
            <div className="main relative">
                <div className={`relative w-full h-[250px] ${style.imageContainer}`}>
                    <Image
                        src={product.imgCover}
                        alt={product.title}
                        layout="fill" // Fills parent container
                        objectFit="cover"
                        className='rounded-[20px]'
                    />
                    </div>
                <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Eye className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                    <div className='bg-[#F82BA9] p-1 rounded-full'>
                        <Heart className='size-8 rounded-full text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold line-clamp-1'>{product.title}</h3>
            <div className="footer flex justify-between items-center">
                <div className="left">
                    <div className="stars flex gap-1 my-2">
                        <StarsRating product={product}/>
                    </div>
                    <p className="color-rose">price : ${product.price}</p>
                </div>
                <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                    <BriefcaseBusiness className=' '/>
                </div>
            </div>
        </div>)}
    </div>
  </>
}
