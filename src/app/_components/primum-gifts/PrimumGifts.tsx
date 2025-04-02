import React from 'react'
import style from "./Primum.module.css"
import { Button } from '@/components/ui/button'
import { ArrowRight, BriefcaseBusiness, Star } from 'lucide-react'
import img from "../../../public/assets/images/Link.png"
import Image from 'next/image'
import img1 from "../../../public/assets/images/02.png.png"
import img2 from "../../../public/assets/images/03.png.png"

export default function PremiumGifts() {
  return <>
    <div className="parent flex">
        <div className="first w-1/4 p-3">
            <h3 className={`color-rose font-bold ${style.letter} mb-7`}>Premium Gifts</h3>
            <h2 className='font-bold text-2xl my-4'>Best <span className='color-rose'>Seller Gifts</span> And Products</h2>
            <p className='text-[#757F95] mb-5'>Recusandae tempora aut laborum molestias veniam. A commodi sequi accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta necessitatibus ut ad.</p>
            <Button className='text-white py-[10px] px-[20px]'>Explore More <ArrowRight /></Button>
        </div>
        <div className="w-3/4 p-3 products flex">
            <div className='w-1/3 relative'>
                <Image src={img} alt="watch" className='w-full'/>
                <h3 className='font-bold'>Spicial Gift Box</h3>
                <div className="footer flex justify-between items-center">
                    <div className="left">
                        <div className="stars flex gap-1 my-2">
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400'/>
                        </div>
                        <p>price : $250.00</p>
                    </div>
                    <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                        <BriefcaseBusiness className=' '/>
                    </div>
                </div>
                <div className="notification absolute top-0 end-0 bg-rose text-white px-3 py-0 rounded-2xl">
                    new
                </div>
            </div>
            <div className='w-1/3 relative'>
                <Image src={img1} alt="watch" className='w-full'/>
                <h3 className='font-bold'>Spicial Gift Box</h3>
                <div className="footer flex justify-between items-center">
                    <div className="left">
                        <div className="stars flex gap-1 my-2">
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400'/>
                        </div>
                        <p>price : $250.00</p>
                    </div>
                    <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                        <BriefcaseBusiness className=' '/>
                    </div>
                </div>
                <div className="notification absolute top-0 end-0 bg-[#F05454] text-white px-3 py-0 rounded-2xl">
                    Out Of Stoke
                </div>
            </div>
            <div className='w-1/3 relative'>
                <Image src={img2} alt="watch" className='w-full'/>
                <h3 className='font-bold'>Spicial Gift Box</h3>
                <div className="footer flex justify-between items-center">
                    <div className="left">
                        <div className="stars flex gap-1 my-2">
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400 fill-yellow-400'/>
                            <Star className='text-sm text-yellow-400'/>
                        </div>
                        <p>price : $250.00</p>
                    </div>
                    <div className="right bg-[#8C52FF] text-white p-2 rounded-full">
                        <BriefcaseBusiness className=' '/>
                    </div>
                </div>
                <div className="notification absolute top-0 end-0 bg-[#00BFFF] text-white px-3 py-0 rounded-2xl">
                    Hot
                </div>
            </div>
        </div>
    </div>
  </>
}
