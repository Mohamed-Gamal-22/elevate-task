"use client"
import React, { useEffect, useState } from 'react'
import style from "./Primum.module.css"
import { Button } from '@/components/ui/button'
import { ArrowRight, BriefcaseBusiness, Star } from 'lucide-react'
import Image from 'next/image'
import Slider from "react-slick";
import SampleNextArrow from '../Arrows/next-arrow/NextArrow'
import SamplePrevArrow from '../Arrows/prev-arrow/PrevArrow'
import { Product } from '../../../types/product.type.'
import StarsRating from './../stars-rating/StarsRating';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

export default function PremiumGifts() {

    const [data, setdata] = useState<Product[]>([])

    async function getBest(){
        let response = await fetch(`http://localhost:3000/api/best-seller`)
        let data = await response.json()
        console.log(data.data.bestSeller)
        setdata(data.data.bestSeller)
      }
    
      useEffect(()=>{
        getBest()
      }, [])


  return <>
  
    <div className="parent flex container w-[80%] mx-auto">
        <div className="first w-1/4 p-3">
            <h3 className={`color-rose font-bold ${style.letter} mb-7`}>Premium Gifts</h3>
            <h2 className='font-bold text-2xl my-4'>Best <span className='color-rose'>Seller Gifts</span> And Products</h2>
            <p className='text-[#757F95] mb-5'>Recusandae tempora aut laborum molestias veniam. A commodi sequi accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta necessitatibus ut ad.</p>
            <Button className='text-white py-[10px] px-[20px]'>Explore More <ArrowRight /></Button>
        </div>
        <div className="w-3/4 p-3 product">
            <Slider {...settings} >
            {data?.map((product) => <div className='relative p-3'>
                    <div className={`relative w-full h-[250px] ${style.imageContainer}`}>
                    <Image
                        src={product.imgCover}
                        alt={product.title}
                        layout="fill" // Fills parent container
                        objectFit="cover"
                    />
                    </div>
                    <h3 className='font-bold'>{product.title}</h3>
                    <div className="footer flex justify-between items-center">
                        <div className="left">
                            <div className="stars flex gap-1 my-2">
                                <StarsRating product={product} />
                            </div>
                            <p className='color-rose'>price : ${product.price}</p>
                        </div>
                        <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                            <BriefcaseBusiness className=' '/>
                        </div>
                    </div>
                    <div className="notification absolute top-0 end-0 bg-rose text-white px-3 py-0 rounded-2xl">
                        new
                    </div>
                </div>)}
            </Slider>
        </div>
    </div>
  </>
}
