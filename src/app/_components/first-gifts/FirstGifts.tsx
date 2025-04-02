import React from 'react'
import gift1 from "../../../public/assets/images/Christmas shopping composition with presents and cart.png";
import gift2 from "../../../public/assets/images/Confetti lying near present.png";
import gift3 from "../../../public/assets/images/Top view hand holding gift box on work space.png"
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function FirstGifts() {
  return <>
    <div className="parent flex justify-between my-6">
        <div className="gift w-1/3 p-3 relative">
            <Image src={gift2} alt="gift1" className='w-full rounded-2xl'/>
            <div className="content absolute inset-0 flex flex-col justify-center items-end pe-8">
                <h2 className='font-bold text-xl color-rose'>Gift Box</h2>
                <p className='font-bold text-2xl flex text-end my-5'>Awesome Gifts Box <br /> Collections</p>
                <Button className='p-2 rounded-3xl text-white'>Shop Now</Button>
            </div>
        </div>
        <div className="gift w-1/3 p-3 relative">
            <Image src={gift3} alt="gift1" className='w-full rounded-2xl'/>
            <div className="content absolute inset-0 flex flex-col justify-center items-end pe-8">
                <h2 className='font-bold text-xl color-rose'>Occasion Gifts</h2>
                <p className='font-bold text-2xl flex text-end my-5'>Best Occasion Gifts <br /> Collections</p>
                <Button className='p-2 rounded-3xl text-white'>Discover Now</Button>
            </div>
        </div>
        <div className="gift w-1/3 p-3 relative">
            <Image src={gift1} alt="gift1" className='w-full rounded-2xl'/>
            <div className="content absolute inset-0 flex flex-col justify-center items-end pe-8">
                <h2 className='font-bold text-xl color-rose'>Occasion Gifts</h2>
                <p className='font-bold text-2xl flex text-end my-5'>Combo Sets Gift Box <br /> Up To 50% Off</p>
                <Button className='p-2 rounded-3xl text-white'>Shop Now</Button>
            </div>
        </div>
    </div>
  </>
}
