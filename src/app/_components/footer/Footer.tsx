import React from 'react'
import style from "./footer.module.css"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return <>
    <div className={`${style.section} container w-[80%] mx-auto my-20 py-8`}>
      <ul className='flex justify-evenly'>
        <li>
          <a href="" className='font-bold'>About Us</a>
        </li>
        <li>
          <a href="" className='font-bold'>Store Location</a>
        </li>
        <li>
          <a href="" className='font-bold'>Contact</a>
        </li>
        <li>
          <a href="" className='font-bold'>Delivery</a>
        </li>
        <li>
          <a href="" className='font-bold'>Policy</a>
        </li>
        <li>
          <a href="" className='font-bold'>FAQS</a>
        </li>
      </ul>

      <h2 className={`text-center font-bold text-[30px] mt-12`}>Get <span className='color-rose'>20%</span> Off Discount Coupon</h2>
      <p className='text-center text-[#757F95]'>By Subscribe Our Newsletter</p>

      <form className='my-10 flex items-center w-fit mx-auto relative'>
        <Input className='w-[400px]' placeholder='Enter Your Email'/>
        <Button className='text-white py-[10px] px-[20px] rounded-[30px] absolute top-0 end-[-50px]'>Supscribe <ArrowRight /></Button>
      </form>
    </div>
  </>
}
