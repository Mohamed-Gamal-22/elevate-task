import React from 'react'
import style from "./grid-section.module.css"
import img1 from "../../../public/assets/images/Frame 74.png"
import img2 from "../../../public/assets/images/Frame 75.png"
import img3 from "../../../public/assets/images/Frame 76.png"
import img4 from "../../../public/assets/images/Frame 77.png"
import img5 from "../../../public/assets/images/Frame 78.png"
import Image from 'next/image'

export default function GridSextion() {
  return <>
    <h3 className={`${style.letter} text-center color-rose font-bold`}>Our Gallery</h3>
    <h2 className={`text-center font-bold text-[30px] ${style.test}`}>Let's Check Our Photo Gallery</h2>
    <div className={`${style.container} mb-20 mt-16 container w-[80%] mx-auto`}>
        <div className={`${style.one}`}>
            <Image src={img1} alt="img1"/>
        </div>
        <div className={`${style.two}`}>
            <Image src={img2} alt="img2"/>
        </div>
        <div className={`${style.three}`}>
            <Image src={img3} alt="img3"/>
        </div>
        <div className={`${style.four}`}>
            <Image src={img4} alt="img4"/>
        </div>
        <div className={`${style.five}`}>
            <Image src={img5} alt="img5"/>
        </div>
    </div>
  </>
}
