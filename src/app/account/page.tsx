import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ArrowRight } from 'lucide-react'
  import React from 'react'

export default function Account() {
  return <>
    <div className="container mx-auto w-[80%] mt-20">
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
            <div className="flex justify-end">
            <Button className='text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8'>Confirm <ArrowRight /></Button>
            </div>
        </form>
    </div>
  </>
}
