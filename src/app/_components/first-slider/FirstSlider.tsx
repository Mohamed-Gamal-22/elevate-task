import React from 'react'
import bannerOne from "../../../public/assets/images/hs-1-banner.jpg.png"
import bannerTwo from "../../../public/assets/images/Background.png"
import Image from 'next/image'

export default function FirstSlider() {
  return <>
    <div className="parent my-6 container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
  <div className="left md:col-span-1">
    <Image src={bannerOne} alt="banner" className="rounded-2xl w-full h-[440px] object-cover" />
  </div>
  <div className="right md:col-span-3">
    <Image src={bannerTwo} alt="banner" className="rounded-2xl w-full h-[440px] object-cover" />
  </div>
</div>
  </>
}
