import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import style from "./search.module.css"

export default function SearchInput() {
  return <>
    <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <div className='w-[600px]  rounded-[20px] shadow-md p-8 text-[14px]'>
            <form className='relative'>
                <input placeholder='Search Here...' className={`w-full p-4  bg-transparent outline-none border-b-[1px] focus:outline-2 focus:outline-white ${style.myInput} focus:border-0 text-white`}/>
                <Search className='absolute top-[50%] -translate-y-1/2 end-[5px] text-white'/>
            </form>
        </div>
    </div>
  </>
}
