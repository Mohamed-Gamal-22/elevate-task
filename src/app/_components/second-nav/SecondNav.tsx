import React from 'react'
import icon1 from "../../../public/assets/images/home.svg.svg"
import icon2 from "../../../public/assets/images/jewelry.svg.svg"
import icon3 from "../../../public/assets/images/garment.svg.svg"
import icon4 from "../../../public/assets/images/gift-box.svg.svg"
import icon5 from "../../../public/assets/images/office.svg.svg"
import style from "./second-nav.module.css"
import Image from 'next/image'

export default function SecondNav() {
  return <>
    <div className="allItems my-4 flex justify-between">
        <div className="item flex items-center gap-5">
            <div className={`${style.icon} p-5 rounded-[45px]`}>
                <Image src={icon4} alt='img' width={50} height={50}/>
            </div>
            <div className="title">
                <h2 className='color-dark font-bold'>Gift Box</h2>
                <p className='text-[#757F95]'>30 items</p>
            </div>
        </div>
        <div className="item flex items-center gap-5">
            <div className={`${style.icon} p-5 rounded-[45px]`}>
                <Image src={icon4} alt='img' width={50} height={50}/>
            </div>
            <div className="title">
                <h2 className='color-dark font-bold'>Home & <br /> living Gift</h2>
                <p className='text-[#757F95]'>30 items</p>
            </div>
        </div>
        <div className="item flex items-center gap-5">
            <div className={`${style.icon} p-5 rounded-[45px]`}>
                <Image src={icon4} alt='img' width={50} height={50}/>
            </div>
            <div className="title">
                <h2 className='color-dark font-bold'>Jewelry & <br /> accessories</h2>
                <p className='text-[#757F95]'>30 items</p>
            </div>
        </div>
        <div className="item flex items-center gap-5">
            <div className={`${style.icon} p-5 rounded-[45px]`}>
                <Image src={icon4} alt='img' width={50} height={50}/>
            </div>
            <div className="title">
                <h2 className='color-dark font-bold'>Garmet <br /> Care</h2>
                <p className='text-[#757F95]'>30 items</p>
            </div>
        </div>
        <div className="item flex items-center gap-5">
            <div className={`${style.icon} p-5 rounded-[45px]`}>
                <Image src={icon4} alt='img' width={50} height={50}/>
            </div>
            <div className="title">
                <h2 className='color-dark font-bold'>Office & <br /> stationary</h2>
                <p className='text-[#757F95]'>30 items</p>
            </div>
        </div>
    </div>
    </>
}
