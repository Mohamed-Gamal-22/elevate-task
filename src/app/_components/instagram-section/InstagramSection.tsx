import React from 'react';
import style from "./instagramSection.module.css";
import {Alex_Brush} from "next/font/google";
import Image from 'next/image';
import gift1 from "../../../public/assets/images/image 43.png"
import gift2 from "../../../public/assets/images/image 44.png"
import gift3 from "../../../public/assets/images/image 45.png"
import gift4 from "../../../public/assets/images/image 46.png"
import gift5 from "../../../public/assets/images/image 42.png"
import { FaInstagram } from 'react-icons/fa';


const spicialFont = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    // variable : "--roseFont"
  })

export default function InstagramSection() {


  return <>

    <h2 className={`text-center font-bold text-[30px] ${style.test}`}>Instagram <span className={`color-rose ${spicialFont.className}`}>@Rose</span></h2>


    <div className="container w-[80%] mb-20 mx-auto flex">
        <div className="insta my-4 p-2">
            <div className="item relative">
                <Image src={gift1} alt="gift1"/>
                <div className="layer absolute opacity-0 hover:opacity-100 duration-300 inset-0 rounded-[20px] text-white bg-[#F82BA977] flex justify-center items-center">
                        <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                        <FaInstagram className='text-white size-5 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="insta my-4 p-2">
            <div className="item relative">
                <Image src={gift2} alt="gift2"/>
                <div className="layer absolute opacity-0 hover:opacity-100 duration-300 inset-0 rounded-[20px] text-white bg-[#F82BA977] flex justify-center items-center">
                        <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                        <FaInstagram className='text-white size-5 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="insta my-4 p-2">
            <div className="item relative">
                <Image src={gift3} alt="gift3"/>
                <div className="layer absolute opacity-0 hover:opacity-100 duration-300 inset-0 rounded-[20px] text-white bg-[#F82BA977] flex justify-center items-center">
                        <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                        <FaInstagram className='text-white size-5 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="insta my-4 p-2">
            <div className="item relative">
                <Image src={gift4} alt="gift4"/>
                <div className="layer absolute opacity-0 hover:opacity-100 duration-300 inset-0 rounded-[20px] text-white bg-[#F82BA977] flex justify-center items-center">
                        <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                        <FaInstagram className='text-white size-5 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="insta my-4 p-2">
            <div className="item relative">
                <Image src={gift5} alt="gift5"/>
                <div className="layer absolute opacity-0 hover:opacity-100 duration-300 inset-0 rounded-[20px] text-white bg-[#F82BA977] flex justify-center items-center">
                        <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                        <FaInstagram className='text-white size-5 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}
