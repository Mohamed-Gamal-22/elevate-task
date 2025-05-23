"use client"
import React from 'react'
import style from "./testimonials.module.css"
import Image from 'next/image'
import img1 from "../../../public/assets/images/Group 6.png"
import { Star } from 'lucide-react'
import message from "../../../public/assets/images/Group.png"

import Slider from "react-slick";
import SampleNextArrow from '../Arrows/next-arrow/NextArrow'
import SamplePrevArrow from '../Arrows/prev-arrow/PrevArrow'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

export default function Testimonials() {
  return <>
    <div className={`${style.testimonials} my-20 py-10  flex flex-wrap`}>
          <div className="container w-[80%] mx-auto">
            <Slider {...settings}>
                <div className="p-2">
                    <div className="content bg-white p-9 rounded-[100px] rounded-tl-[50px]">
                        <div className="header flex gap-4">
                            <div className="left">
                                <Image src={img1} alt="img1"/>
                            </div>
                            <div className="right font-bold">
                                <p>Mohamed Gamal</p>
                                <p className='color-rose'>Customer</p>
                            </div>
                        </div>
                        <hr className='my-4'/>
                        <p className='text-sm text-[#757F95]'>Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.</p>
                        <div className='flex justify-between'>
                            <div className="footer my-4 flex gap-1">
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                            </div>
                            <Image src={message} alt="message" />
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="content bg-white p-9 rounded-[100px] rounded-tl-[50px]">
                        <div className="header flex gap-4">
                            <div className="left">
                                <Image src={img1} alt="img1"/>
                            </div>
                            <div className="right font-bold">
                                <p>Mohamed Gamal</p>
                                <p className='color-rose'>Customer</p>
                            </div>
                        </div>
                        <hr className='my-4'/>
                        <p className='text-sm text-[#757F95]'>Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.</p>
                        <div className='flex justify-between'>
                            <div className="footer my-4 flex gap-1">
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                            </div>
                            <Image src={message} alt="message" />
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="content bg-white p-9 rounded-[100px] rounded-tl-[50px]">
                        <div className="header flex gap-4">
                            <div className="left">
                                <Image src={img1} alt="img1"/>
                            </div>
                            <div className="right font-bold">
                                <p>Mohamed Gamal</p>
                                <p className='color-rose'>Customer</p>
                            </div>
                        </div>
                        <hr className='my-4'/>
                        <p className='text-sm text-[#757F95]'>Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.</p>
                        <div className='flex justify-between'>
                            <div className="footer my-4 flex gap-1">
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                            </div>
                            <Image src={message} alt="message" />
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="content bg-white p-9 rounded-[100px] rounded-tl-[50px]">
                        <div className="header flex gap-4">
                            <div className="left">
                                <Image src={img1} alt="img1"/>
                            </div>
                            <div className="right font-bold">
                                <p>Mohamed Gamal</p>
                                <p className='color-rose'>Customer</p>
                            </div>
                        </div>
                        <hr className='my-4'/>
                        <p className='text-sm text-[#757F95]'>Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.</p>
                        <div className='flex justify-between'>
                            <div className="footer my-4 flex gap-1">
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                                <Star className="color-rose fill-[#F82BA9]" />
                            </div>
                            <Image src={message} alt="message" />
                        </div>
                    </div>
                </div>
            </Slider>
            
          </div>
    </div>
  </>
}
