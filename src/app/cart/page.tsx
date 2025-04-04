import React from 'react'
import img1 from "../../public/assets/images/image 24.png";
import img2 from "../../public/assets/images/image 25.png";
import img3 from "../../public/assets/images/image 23.png";
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CircleX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export default function Cart() {
  return <>
    <div className="container w-[80%] mx-auto flex justify-between ">
        <div className="my-table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sub Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <Image src={img1} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <div className="content">
                        <p className="font-bold">Apple Watch</p>
                        <p className='text-[14px] text-[#757F95] my-2'>Type: Watch</p>
                        <p className='text-[14px] text-[#757F95]'>Color: Yellow</p>
                    </div> 
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $1.500
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 color-rose  focus:outline-none" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <span className='color-rose'>1</span>
                      </div>
                      <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium color-rose" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $1.500
                  </td>
                  <td className="px-6 py-4">
                  <CircleX className="color-rose cursor-pointer" />
                  </td>
                </tr> 
                <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <Image src={img2} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <div className="content">
                        <p className="font-bold">Apple Watch</p>
                        <p className='text-[14px] text-[#757F95] my-2'>Type: Watch</p>
                        <p className='text-[14px] text-[#757F95]'>Color: Yellow</p>
                    </div> 
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $1.500
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 color-rose  focus:outline-none" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <span className='color-rose'>1</span>
                      </div>
                      <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium color-rose" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $1.500
                  </td>
                  <td className="px-6 py-4">
                  <CircleX className="color-rose cursor-pointer" />
                  </td>
                </tr> 
                <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <Image src={img3} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <div className="content">
                        <p className="font-bold">Apple Watch</p>
                        <p className='text-[14px] text-[#757F95] my-2'>Type: Watch</p>
                        <p className='text-[14px] text-[#757F95]'>Color: Yellow</p>
                    </div> 
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $1.500
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 color-rose  focus:outline-none" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <span className='color-rose'>1</span>
                      </div>
                      <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium color-rose" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $1.500
                  </td>
                  <td className="px-6 py-4">
                  <CircleX className="color-rose cursor-pointer" />
                  </td>
                </tr> 
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between">
            <form className='my-10 flex items-center w-fit relative'>
              <Input className='w-[400px]' placeholder='Enter Your Email'/>
              <Button className='text-white py-[10px] px-[20px] rounded-[30px] absolute top-0 end-[-50px]'>Apply coupon <ArrowRight /></Button>
            </form>
            <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px]'><ArrowLeft />Continue Shopping </Button>
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
  </>
}
