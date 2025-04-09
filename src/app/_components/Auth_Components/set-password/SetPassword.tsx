import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function SetPassword() {
  return <>
    <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
            <h2 className='text-[30px] my-8'>Set The New Password</h2>
            <form>
                <Input placeholder='Create New Password' className='mb-6'/>
                <Input placeholder='Confirm Password' className='mb-6'/>

                <Button className="w-full text-white rounded-[30px]">Set The Password</Button>
            </form>
        </div>
    </div>
  </>
}
