"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext } from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { LoginFields, loginScema } from '@/lib/schemes/authSchema'
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { AuthFormContext } from '@/app/context/AuthForm'
import Swal from 'sweetalert2'

export default function Login() {

  const context = useContext(AuthFormContext);

  if (!context) {
    throw new Error('AuthFormContext must be used within an AuthFormProvider');
  }

  const { closeAll, getRegister, getForgetPassword } = context

  // mohamedgamal@gmail.com
  // Mm@123456

  // <loginField> => make type for form inputs
  const form = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginScema)
  })

  function closeLogin(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();

    const target = e.target as HTMLElement;

    if (target && target.classList.contains("h-screen")) {
      closeAll();
    }
  }

  async function submitForm(values: { email: string, password: string }) {
    // console.log(values)
    const res = await signIn("credentials", {
      callbackUrl: "/",
      redirect: false,
      email: values.email,
      password: values.password,
    })

    if (res?.ok) {
      window.location.href = res.url || "/"
    } else {
      console.log(res?.error)

      // Show SweetAlert error
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Wrong email or password. Please try again.',
        confirmButtonColor: '#d33',
      })
    }
  }

  async function handleForget() {
    console.log("forget please")
    getForgetPassword()
  }

  return <>
    <div onClick={(e) => { closeLogin(e) }} className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
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
                  render={({ field }) => <FormItem>
                    {/* Field (input) */}
                    <FormControl>
                      <Input type='email' {...field} placeholder='Enter Your Email' className='my-6' />
                    </FormControl>

                    {/* FeedBack */}
                    <FormMessage />
                  </FormItem>}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => <FormItem>
                    {/* Field (input) */}
                    <FormControl>
                      <Input type='password' {...field} placeholder='Enter Your Password' className='mt-6' />
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
                    render={({ field }) => <FormItem>
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
                  <span className='color-rose underline cursor-pointer' onClick={() => handleForget()}>Forget Password</span>
                </div>

                {/* change to Register */}
                <p>dont have an account ? <span onClick={() => getRegister()} className="color-rose underline cursor-pointer">Go To Register</span></p>

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
