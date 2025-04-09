import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function VerifyCode() {
  return <>
    <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
            <h2 className='text-[30px] my-8'>Verify Code</h2>
            <form>
                <Input placeholder='Enter Code' className='mb-6'/>
                <p className='text-end my-8 text-[#313131]'>Didn't Receive The Code? <span className='color-rose underline'>Resend</span></p>

                <Button className="w-full text-white rounded-[30px]">Recover Password</Button>
            </form>
        </div>
    </div>
  </>
}
