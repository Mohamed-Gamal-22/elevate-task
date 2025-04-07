import React from 'react'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import img1 from "../../public/assets/images/Cash.png"
import img2 from "../../public/assets/images/Visa.png"
import { Input } from '@/components/ui/input';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

export default function Payment() {
  return <>
    <div className={`container mx-auto w-[80%] ${inter.className}`}>
    <h2 className="font-bold text-[#212529] mb-6">Your Billing Address</h2>
    <div className="flex justify-between">
        <div className="left  w-full p-9">
            <p className="font-bold text-[#F82BA9] mb-4">Your Payment Info</p>
            <div className='flex gap-3'>
                <div className="pay py-4 px-2 flex flex-col items-center border border-[#757F95] rounded-[20px]">
                    <Image src={img1} alt='img1' width={48}/>
                    <p className="text-[#757F95] mt-4 font-light">Cash On Delivery</p>
                </div>
                <div className="pay py-4 px-2 flex flex-col items-center border border-[#757F95] rounded-[20px]">
                    <Image src={img2} alt='img2'/>
                    <p className="text-[#F82BA9] mt-4 font-light">Pay With Credit Card</p>
                </div>
            </div>
            <div className="card flex w-full gap-12 mt-4">
                <div className="first w-1/2 p-4 ">
                    <label htmlFor="holder_name">Card Holder Name</label>
                    <Input className='w-full mt-2' placeholder='Name Of Card' id='holder_name'/>
                </div>
                <div className="last w-1/2 p-4">
                    <label htmlFor="state">Card Number</label>
                    <Input className='w-full mt-2' placeholder='Your Card Number' id='state'/>
                </div>
            </div>
            <div className="card flex w-full gap-12 mt-4">
                <div className="first w-1/2 p-4 ">
                    <label htmlFor="holder_name">Expire Date</label>
                    <Input className='w-full mt-2' placeholder='Expire' id='holder_name'/>
                </div>
                <div className="last w-1/2 p-4">
                    <label htmlFor="state">CCV</label>
                    <Input className='w-full mt-2' placeholder='Your CCV' id='state'/>
                </div>
            </div>
            <div className='flex justify-between'>
            <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8'>Previous<ArrowLeft /></Button>
            <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8'>Pay Now<ArrowRight /></Button>
          </div>
        </div>
        <div className="cart-details">
          <h2 className="font-bold my-8">Cart Summary</h2>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Sub Total:</span>
            <span className='text-[#757F95]'>$4.500.00</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Discount:</span>
            <span className='text-[#757F95]'>$5.00</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Shipping:</span>
            <span className='text-[#757F95]'>Free</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Taxes:</span>
            <span className='text-[#757F95]'>$25.00</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Total:</span>
            <span className='color-rose'>$4.520.00</span>
          </div>
          <div className='text-end'>
            <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8'>Discover More <ArrowRight /></Button>
          </div>
        </div>
    </div>






        <div className="message mb-10">
            <h1 className="text-[30px] text-[#160E4B]">Your Order Is Confirmed</h1>
            <p className='text-[#797979] mt-4'>An email been sent to your mail address @gmail.com  </p>
        </div>
        <div className="cart-details border-2 text-[#160E4B] border-[#F82BA9] p-6 rounded-[20px]">
          <h3 className="text-[18px]">Cart Summary</h3>
          <h2 className="font-bold my-8">Cart Summary</h2>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Sub Total:</span>
            <span className='text-[#757F95]'>$4.500.00</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Discount:</span>
            <span className='text-[#757F95]'>$5.00</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Shipping:</span>
            <span className='text-[#757F95]'>Free</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Taxes:</span>
            <span className='text-[#757F95]'>$25.00</span>
          </div>
          <div className="item flex justify-between gap-20 my-2">
            <span className='font-bold'>Total:</span>
            <span className='color-rose'>$4.520.00</span>
          </div>
        </div>
    </div>
  </>
}
