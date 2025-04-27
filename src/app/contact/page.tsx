import React from 'react'
import style from "./contact.module.css"
import { ArrowRight, Mail, MapPin, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return <>
    <div className='container w-[80%] mx-auto'>
        <h2 className={`color-rose ${style.letter} my-10`}>Contact Us</h2>
    </div>
    <div className="container w-[80%] mx-auto">
        <div className="flex justify-between flex-wrap">
            <div className="left flex flex-col md:flex-row md:flex-wrap  p-4 w-full lg:w-1/2">
                <div className="cont flex items-center lg:px-10 gap-3 md:w-[40%] lg:w-full">
                    <div className="icon border p-2 border-[#F82BA9] rounded-[10px]">
                        <PhoneCall className='color-rose font-bold'/>
                    </div>
                    <div className="info">
                        <h4 className='color-rose font-bold'>Call Anytime</h4>
                        <p className='text-sm'>241-373-2123</p>
                    </div>
                </div>
                <div className="cont flex items-center py-10 lg:px-10 gap-3 md:w-[40%] lg:w-full">
                    <div className="icon border p-2 border-[#F82BA9] rounded-[10px]">
                        <Mail className='color-rose font-bold'/>
                    </div>
                    <div className="info">
                        <h4 className='color-rose font-bold'>Send Email</h4>
                        <p className='text-sm'>Dwight63@gmail.com</p>
                    </div>
                </div>
                <div className="cont flex items-center lg:px-10 gap-3 md:w-[40%] lg:w-full">
                    <div className="icon border p-2 border-[#F82BA9] rounded-[10px]">
                        <MapPin className='color-rose font-bold'/>
                    </div>
                    <div className="info">
                        <h4 className='color-rose font-bold'>Visit Us</h4>
                        <p className='text-sm'>20 Island Park Road,<br /> 
                        New Jearsy, New York, USA</p>
                    </div>
                </div>
            </div>
            <div className="right w-full lg:w-1/2 mt-12 lg:mt-0">
                <form className='flex flex-col justify-end'>
                    <input type='text' className='w-full focus:outline-none border border-[#F82BA9] border-1 rounded-[10px] py-1 px-4' placeholder='Name'/>
                    <input type="email" className='w-full focus:outline-none border border-[#F82BA9] border-1 rounded-[10px] py-1 px-4 my-6' placeholder='Email'/>
                    <input type="tel" className='w-full focus:outline-none border border-[#F82BA9] border-1 rounded-[10px] py-1 px-4' placeholder='Phone'/>
                    <textarea className='w-full focus:outline-none mt-6 border border-[#F82BA9] border-1 rounded-[10px] py-1 px-4' placeholder='Your Message' name="" id="" rows={5}></textarea>
                    <div className='text-end'>
                    <Button className='text-white w-[100px] my-6 py-[10px] px-[20px] rounded-[30px]'>Send<ArrowRight /></Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
   
  </>
}
