import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function ForgetPassword() {
  return <>
    <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
            <h2 className='text-[30px] my-8'>Forget Your Password ?</h2>
            <form>
                <Input placeholder='Email Or Phone Number' className='mb-6'/>

                <Button className="w-full text-white rounded-[30px]">Recover Password</Button>
            </form>
        </div>
    </div>
  </>
}
