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
    <div className="mb-20 mt-16 container justify-center w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="rounded-xl overflow-hidden">
    <Image src={img1} alt="img1" className="w-full h-auto" />
  </div>
  <div className="rounded-xl overflow-hidden">
    <Image src={img2} alt="img2" className="w-full h-auto" />
  </div>
  <div className="rounded-xl overflow-hidden">
    <Image src={img3} alt="img3" className="w-full h-auto" />
  </div>
  <div className="lg:col-span-2 rounded-xl overflow-hidden">
    <Image src={img4} alt="img4" className="w-full h-auto" />
  </div>
  <div className="rounded-xl overflow-hidden">
    <Image src={img5} alt="img5" className="w-full h-auto" />
  </div>
</div>

  </>
}
