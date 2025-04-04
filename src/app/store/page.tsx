import React from 'react'
import style from "./store.module.css"
import img1 from "../../public/assets/images/unsplash_EnOliwbSrxE.png"
import img2 from "../../public/assets/images/unsplash_TT6Hep-JzrU.png"
import img3 from "../../public/assets/images/unsplash_eBE3pEIZjbc.png"
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

export default function Store() {
  return <>
    <div className="container w-[80%] mx-auto mt-20">
        <h2 className={`${style.test} text-3xl font-bold mt-12 mb-8`}>Our Stores</h2>
    </div>
    <div className="container w-[80%] mx-auto mt-20">
        
        <div className="store flex justify-between items-center border-2 p-6 rounded-[12px] border-[#F82BA9] my-16">
            <div className="img">
                <Image src={img1} alt="store1"/>
            </div>
            <div className={`content text-center text-[#160E4B] ${inter.className}`}>
                <h2 className="text-[24px] color-dark font-bold mb-4">Store 1</h2>
                <p className="text-[10px]">3030 SW 8th St Miami <br /> Miami, Florida 33135 <br /> United States</p>
            </div>
            <div className="work-hours">
                <ul className="list-disc">
                    <li>Mon.09:00AM - 07:00PM</li>
                    <li className='my-2'>Tue.09:00AM - 07:00PM</li>
                    <li>Wed.09:00AM - 07:00PM</li>
                    <li className='my-2'>Thu.09:00AM - 07:00PM</li>
                    <li>Fri.09:00AM - 07:00PM</li>
                    <li className='my-2'>Sat.10:00AM - 04:00PM</li>
                    <li>Sun.10:00AM - 04:00PM</li>
                </ul>
            </div>
        </div>
        <div className="store flex justify-between items-center border-2 p-6 rounded-[12px] border-[#F82BA9] my-16">
            <div className="img">
                <Image src={img2} alt="store1"/>
            </div>
            <div className={`content text-center text-[#160E4B] ${inter.className}`}>
                <h2 className="text-[24px] color-dark font-bold mb-4">Store 2</h2>
                <p className="text-[10px]">3030 SW 8th St Miami <br /> Miami, Florida 33135 <br /> United States</p>
            </div>
            <div className="work-hours">
                <ul className="list-disc">
                    <li>Mon.09:00AM - 07:00PM</li>
                    <li className='my-2'>Tue.09:00AM - 07:00PM</li>
                    <li>Wed.09:00AM - 07:00PM</li>
                    <li className='my-2'>Thu.09:00AM - 07:00PM</li>
                    <li>Fri.09:00AM - 07:00PM</li>
                    <li className='my-2'>Sat.10:00AM - 04:00PM</li>
                    <li>Sun.10:00AM - 04:00PM</li>
                </ul>
            </div>
        </div>
        <div className="store flex justify-between items-center border-2 p-6 rounded-[12px] border-[#F82BA9]">
            <div className="img">
                <Image src={img3} alt="store1"/>
            </div>
            <div className={`content text-center text-[#160E4B] ${inter.className}`}>
                <h2 className="text-[24px] color-dark font-bold mb-4">Store 3</h2>
                <p className="text-[10px]">3030 SW 8th St Miami <br /> Miami, Florida 33135 <br /> United States</p>
            </div>
            <div className="work-hours">
                <ul className="list-disc">
                    <li>Mon.09:00AM - 07:00PM</li>
                    <li className='my-2'>Tue.09:00AM - 07:00PM</li>
                    <li>Wed.09:00AM - 07:00PM</li>
                    <li className='my-2'>Thu.09:00AM - 07:00PM</li>
                    <li>Fri.09:00AM - 07:00PM</li>
                    <li className='my-2'>Sat.10:00AM - 04:00PM</li>
                    <li>Sun.10:00AM - 04:00PM</li>
                </ul>
            </div>
        </div>
    </div>
  </>
}
