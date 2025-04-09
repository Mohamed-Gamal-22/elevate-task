import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

export default function Checkout() {
  return <>
     <div className={`container mx-auto w-[80%] ${inter.className}`}>

            <h2 className="font-bold text-[#F82BA9] mb-6">Your Billing Address</h2>
            <div className="flex justify-between">
                <form className='w-[80%]'>
                    <div className="names flex gap-12">
                        <div className="first w-1/2 p-4 ">
                            <label htmlFor="fName">First Name</label>
                            <Input className='w-full mt-2' placeholder='First Name' id='fName'/>
                        </div>
                        <div className="last w-1/2 p-4">
                            <label htmlFor="lName">Last Name</label>
                            <Input className='w-full mt-2' placeholder='Last Name' id='lName'/>
                        </div>
                    </div>
                    <div className="Emails flex gap-12 mt-4">
                        <div className="first w-1/2 p-4 ">
                            <label htmlFor="email">Email</label>
                            <Input className='w-full mt-2' placeholder='Email Address' id='email'/>
                        </div>
                        <div className="last w-1/2 p-4">
                            <label htmlFor="phone">Phone</label>
                            <Input className='w-full mt-2' placeholder='Phone Number' id='phone'/>
                        </div>
                    </div>
                    <div className="address1 mt-4">
                        <div className="first w-full">
                            <label htmlFor="add1">Address Line 1</label>
                            <Input className='w-full mt-2' placeholder='Address Line 1' id='add1'/>
                        </div>
                    </div>
                    <div className="address1 mt-4">
                        <div className="first w-full">
                            <label htmlFor="add2">Address Line 2</label>
                            <Input className='w-full mt-2' placeholder='Address Line 2' id='add2'/>
                        </div>
                    </div>

                    <div className="Country flex gap-12 mt-4">
                        <div className="first w-1/2 p-4 ">
                            <label htmlFor="email">Country</label>
                            <Select>
                                <SelectTrigger className="mt-2">
                                    <SelectValue placeholder="Choose Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Egypt">Egypt</SelectItem>
                                    <SelectItem value="USA">USA</SelectItem>
                                    <SelectItem value="Yemen">Yemen</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="last w-1/2 p-4">
                            <label htmlFor="City">City</label>
                            <Input className='w-full mt-2' placeholder='City' id='City'/>
                        </div>
                    </div>
                    <div className="post flex gap-12 mt-4">
                        <div className="first w-1/2 p-4 ">
                            <label htmlFor="post_code">Post Code</label>
                            <Input className='w-full mt-2' placeholder='Post Code' id='post_code'/>
                        </div>
                        <div className="last w-1/2 p-4">
                            <label htmlFor="state">State</label>
                            <Input className='w-full mt-2' placeholder='State' id='state'/>
                        </div>
                    </div>
                    <div className="msg mt-4">
                        <div className="first w-full">
                            <label htmlFor="add2">Your Message For Order</label>
                            <Input className='w-full mt-2' placeholder='Your Message' id='add2'/>
                        </div>
                    </div>
                    <div className="flex justify-between">
                    <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8'>Back To Card <ArrowLeft /></Button>
                    <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8'>Next Step<ArrowRight /></Button>
                    </div>

                </form>

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
        <h2 className="font-bold text-[#212529] mt-20">Your Payment Info</h2>

</div>
  </>
}
