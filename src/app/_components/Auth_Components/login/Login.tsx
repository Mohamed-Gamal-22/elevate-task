import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Login() {
  return <>
    <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
            <h2 className='text-[30px] my-8'>Login To Your Account</h2>
            <form>
                <Input placeholder='Email...' className='mb-6'/>
                <Input placeholder='Password...'/>
                <div className='flex justify-between items-center my-8'>
                    <div className="check flex items-center gap-2">
                        <Checkbox id='remember'/>
                        <label htmlFor="remember" className="text-[#313131]">Remember Me</label>
                    </div>
                    <span className='color-rose underline'>Forget Password</span>
                </div>
                <p className='text-center my-8 text-[#313131]'>No Account? <span className='color-rose underline'>Create One Here</span></p>

                <Button className="w-full text-white rounded-[30px]">Login</Button>
            </form>
        </div>
    </div>
  </>
}
