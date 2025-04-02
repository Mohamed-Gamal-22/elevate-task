import Image from 'next/image'
import style from "./third-nav.module.css";
import React from 'react'
import icon1 from "../../../public/assets/images/Icon (1).png";
import icon2 from "../../../public/assets/images/Icon (2).png";
import icon3 from "../../../public/assets/images/Icon (3).png";
import icon4 from "../../../public/assets/images/Icon.png";


export default function ThirdNav() {
  return <>
    <div className="allItems my-20 flex justify-around">
            <div className="item flex items-center gap-5">
                <div className={`${style.icon} w-[60px] h-[60px] flex justify-center items-center rounded-full`}>
                    <Image src={icon4} alt='img' width={30} height={30}/>
                </div>
                <div className="title">
                    <h2 className='color-dark font-bold'>Free Delivery</h2>
                    <p className='text-[#757F95] text-sm mt-1'>Order Over $120</p>
                </div>
            </div>
            <div className="item flex items-center gap-5">
                <div className={`${style.icon} w-[60px] h-[60px] flex justify-center items-center rounded-full`}>
                    <Image src={icon1} alt='img' width={30} height={30}/>
                </div>
                <div className="title">
                    <h2 className='color-dark font-bold'>Get Refund</h2>
                    <p className='text-[#757F95] text-sm mt-1'>Within 30 Days Returns</p>
                </div>
            </div>
            <div className="item flex items-center gap-5">
                <div className={`${style.icon} w-[60px] h-[60px] flex justify-center items-center rounded-full`}>
                    <Image src={icon1} alt='img' width={30} height={30}/>
                </div>
                <div className="title">
                    <h2 className='color-dark font-bold'>Safe Payment</h2>
                    <p className='text-[#757F95] text-sm mt-1'>100$ Secure Payment</p>
                </div>
            </div>
            <div className="item flex items-center gap-5">
                <div className={`${style.icon} w-[60px] h-[60px] flex justify-center items-center rounded-full`}>
                    <Image src={icon1} alt='img' width={30} height={30}/>
                </div>
                <div className="title">
                    <h2 className='color-dark font-bold'>24/7 Support </h2>
                    <p className='text-[#757F95] text-sm mt-1'>Feel Free To Call Us</p>
                </div>
            </div>
        </div>
  </>
}
