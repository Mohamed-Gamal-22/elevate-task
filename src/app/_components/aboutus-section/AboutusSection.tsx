import React from 'react'
import rectangle3 from "../../../public/assets/images/Rectangle 3.png"
import rectangle4 from "../../../public/assets/images/Rectangle 4.png"
import rectangle5 from "../../../public/assets/images/Rectangle 5.png"
import Image from 'next/image'
import style from "./aboutus.module.css"
import { ArrowRight, CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutusSection() {
  return <>
    <div className="flex flex-wrap justify-center items-center my-20 container w-[80%] mx-auto">
        <div className="w-full lg:w-1/2 flex">
            <div className="left w-1/2 p-2">
                <Image src={rectangle3} alt="rectangle3" className='w-full'/>
            </div>
            <div className="right w-1/2 g p-2 ">
                <Image src={rectangle4} alt="rectangle4"/>
                <Image src={rectangle5} alt="rectangle4"/>
            </div>
        </div>
        <div className="w-full lg:w-1/2">
            <h3 className={`${style.letter} color-rose font-bold`}>About Us</h3>
            <h2 className='my-6 font-bold text-[30px]'>We Provide Best And Quality <span className='color-rose'>Gifts <br />Box</span> Product For You</h2>
            <p className='text-[#757F95]'>Recusandae tempora aut laborum molestias veniam. A commodi sequi accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta necessitatibus ut ad.</p>
            <Button className='text-white py-[10px] px-[20px] my-8'>Discover More <ArrowRight /></Button>

            <div className="footer flex flex-wrap">
                <div className="content py-2 w-1/2 flex items-center gap-2">
                    <span className='inline-block bg-[#8C52FF] text-white p-1 rounded-full'><CircleCheck /></span> Streamlined Shipping Experience
                </div>
                <div className="content py-2 w-1/2 flex items-center gap-2">
                    <span className='inline-block bg-[#8C52FF] text-white p-1 rounded-full'><CircleCheck /></span> Affordable Modern Design
                </div>
                <div className="content py-2 w-1/2 flex items-center gap-2">
                    <span className='inline-block bg-[#8C52FF] text-white p-1 rounded-full'><CircleCheck /></span> Competitive Price & Easy To Shop
                </div>
                <div className="content py-2 w-1/2 flex items-center gap-2">
                    <span className='inline-block bg-[#8C52FF] text-white p-1 rounded-full'><CircleCheck /></span> We Made Awesome Products
                </div>
            </div>
        </div>
    </div>
  </>
}
