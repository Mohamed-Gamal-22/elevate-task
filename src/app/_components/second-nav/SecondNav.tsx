import React from 'react'

import icon4 from "../../../public/assets/images/gift-box.svg.svg"

import style from "./second-nav.module.css"
import Image from 'next/image'

export default function SecondNav() {
  return <>
        <div className="allItems my-4 container w-[80%] mx-auto grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
  {[
    "Gift Box",
    "Home & living Gift",
    "Jewelry & accessories",
    "Garmet Care",
    "Office & stationary",
  ].map((title, index) => (
    <div key={index} className="grid grid-cols-[auto_1fr] items-center gap-5 p-3">
      <div className={`${style.icon} p-5  rounded-[45px]`}>
        <Image src={icon4} alt="img" width={50} height={50} />
      </div>
      <div className="title">
        <h2 className="color-dark font-bold whitespace-pre-line">{title}</h2>
        <p className="text-[#757F95]">30 items</p>
      </div>
    </div>
  ))}
</div>
    </>
}
