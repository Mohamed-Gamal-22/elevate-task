import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Register() {
  return <>
    <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
            <h2 className='text-[30px] my-8'>Create Account</h2>
            <form>
                <Input placeholder='First Name...' className='mb-6'/>
                <Input placeholder='Last Name...' className='mb-6'/>
                <Input placeholder='Phone Number...' className='mb-6'/>
                <Input placeholder='Email...' className='mb-6'/>
                <Input placeholder='Password...' className='mb-6'/>
                <Input placeholder='Confirm Password...' className='mb-6'/>

                <p className='text-center my-8 text-[#313131]'>Already Have An Account? <span className='color-rose underline'>Login</span></p>

                <Button className="w-full text-white rounded-[30px]">Create Account</Button>
            </form>
        </div>
    </div>
  </>
}
