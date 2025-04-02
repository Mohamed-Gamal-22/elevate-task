import React from 'react'
import bannerOne from "../../../public/assets/images/hs-1-banner.jpg.png"
import bannerTwo from "../../../public/assets/images/Background.png"
import Image from 'next/image'

export default function FirstSlider() {
  return <>
    <div className="parent flex justify-between my-6">
        <div className="left w-1/4 p-2">
            <Image src={bannerOne} alt="banner" className='rounded-2xl w-full h-[440px]'/>
        </div>
        <div className="left w-3/4 p-2">
            <Image src={bannerTwo} alt="banner" className='rounded-2xl w-full h-[440px]'/>
        </div>
    </div>
  </>
}
