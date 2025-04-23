import React from 'react'
import style from "./prefooter.module.css"
import Image from 'next/image'
import img1 from "../../../public/assets/images/image 36.png";
import img2 from "../../../public/assets/images/image 37.png";
import img3 from "../../../public/assets/images/image 38.png";
import img4 from "../../../public/assets/images/image 39.png";
import img5 from "../../../public/assets/images/image 40.png";
import img6 from "../../../public/assets/images/image 41.png";

export default function PreFooter() {
  return <>
    <div className='container w-[80%] my-40 mx-auto'>
      <h2 className={`text-center font-bold text-[30px] my-12 ${style.test}`}>Trusted by over <span className='color-rose'>4.5k+ </span>companies</h2>
      <div className="images gap-2 my-7 flex flex-wrap justify-center">
          <Image src={img1} alt="img1"/>
          <Image src={img2} alt="img2"/>
          <Image src={img3} alt="img3"/>
          <Image src={img4} alt="img4"/>
          <Image src={img5} alt="img5"/>
          <Image src={img6} alt="img6"/>
      </div>
    </div>
  </>
}
