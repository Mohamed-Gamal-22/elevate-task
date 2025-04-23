"use client"
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React, { useContext } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { LoginFields, loginScema } from '@/lib/schemes/authSchema'
import {zodResolver} from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { LoginContext } from '@/app/context/LoginContext'

export default function Login() {

    const {showLogin ,setshowLogin} = useContext(LoginContext)
    // mohamedgamal@gmail.com
    // Mm@123456

    // <loginField> => make type for form inputs
    const form = useForm<LoginFields>({
        defaultValues: {
            email : "",
            password: "",
        },
        resolver :zodResolver(loginScema)
    })

    // const {register, handleSubmit, formState} = useForm({
    //     defaultValues: {
    //         email:"",
    //         password:""
    //     }
    // })

    async function submitForm(values:any){
        console.log(values)
        const res = await signIn("credentials", {
            callbackUrl: "/",
            redirect: false,
            email : values.email,
            password: values.password,
        })
        if(res?.ok){
            window.location.href = res.url || "/"
        }else{
            console.log(res?.error)
        }
    }

  return <>
    <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <div className='w-[608px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
            <h2 className='text-[30px] my-8 ms-7'>Login To Your Account</h2>
            <Card className='border-0'>
                <CardContent> 
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(submitForm)}>
                            {/* Email Field */}
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({field}) => <FormItem>
                                    {/* Field (input) */}
                                    <FormControl>
                                        <Input type='email' {...field} placeholder='Enter Your Email' className='my-6'/>
                                    </FormControl>

                                    {/* FeedBack */}
                                    <FormMessage />
                                </FormItem>}
                            />
                            {/* Password Field */}
                            <FormField 
                                control={form.control}
                                name="password"
                                render={({field}) => <FormItem>
                                    {/* Field (input) */}
                                    <FormControl>
                                        <Input type='password' {...field} placeholder='Enter Your Password' className='mt-6'/>
                                    </FormControl>

                                    {/* FeedBack */}
                                    <FormMessage />
                                </FormItem>}
                            />
                            
                            {/* Checkbox Field */}
                            <div className='flex justify-between items-center ms-2 my-2'> 
                                {/* <FormField 
                                control={form.control}
                                name="remember"
                                render={({field}) => <FormItem>
                                        <div className="check flex items-center gap-2">
                                             Field (input) 
                                            <FormControl>
                                                <Input type='checkbox' {...field} className='my-6 '/>
                                            </FormControl>

                                             FeedBack 
                                            <FormLabel className='text-[#313131] text-[12px]  text-nowrap'>
                                                Remember Me
                                            </FormLabel>
                                            <FormMessage />
                                        </div>
                                    </FormItem>}
                                /> */}
                                <span className='color-rose underline'>Forget Password</span>
                            </div>

                            {/* Submit Button */}
                            <Button className='ms-2' type='submit' disabled={form.formState.isSubmitted && !form.formState.isValid}>Login</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            
        </div>
    </div>
  </>
}





// without shadeCn////
//   return <>
//     <div className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
//         <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
//             <h2 className='text-[30px] my-8'>Login To Your Account</h2>
//             <Card className='border-0'>
//                 {/* <CardHeader>
//                     <CardTitle>Card Title</CardTitle>
//                     <CardDescription>Card Description</CardDescription>
//                 </CardHeader> */}
//                 <CardContent>
//                     {/* handleSubmit(func when valid, func when error) */}
//                     <form onSubmit={handleSubmit(submitForm)}>
                        
//                         <Input {...register("email", {
//                             // {value: true, message : "msg"}
//                             required:"Email Is Required*"
//                         })} placeholder='Email...' className='mt-6'/>
//                         {/* get Error from react-hook-form */}
//                         {formState.errors.email?.message && <p className='my-2 font-bold text-sm color-rose'>{formState.errors.email?.message}</p>}

//                         <Input {...register("password", {
//                             // {value: true, message : "msg"}
//                             required : "Password Is Required*"})}
//                             name='password' placeholder='Password...'/>
//                         {/* get Error from react-hook-form */}
//                         {formState.errors.password?.message && <p className='my-2 font-bold text-sm color-rose'>{formState.errors.password?.message}</p>}    
                            
//                         <div className='flex justify-between items-center my-8'>
//                             <div className="check flex items-center gap-2">
//                                 <Checkbox id='remember'/>
//                                 <label htmlFor="remember" className="text-[#313131]">Remember Me</label>
//                             </div>
//                             <span className='color-rose underline'>Forget Password</span>
//                         </div>
//                         <p className='text-center my-8 text-[#313131]'>No Account?
//                             <span className='color-rose underline'>Create One Here</span>
//                         </p>
//                         <Button className="w-full text-white rounded-[30px]">Login</Button>
//                     </form>
//                 </CardContent>
//                 {/* <CardFooter>
//                     <p>Card Footer</p>
//                 </CardFooter> */}
//             </Card>
            
//         </div>
//     </div>
//   </>
