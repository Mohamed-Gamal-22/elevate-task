'use client'

import { AuthFormContext } from '@/app/context/AuthForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Swal from 'sweetalert2'

// Zod schema
const schema = z.object({
  email: z.string().email("Invalid email format"),
})

type FormData = z.infer<typeof schema>

export default function ForgetPassword() {
  const { closeAll, getSetPassword } = useContext<any>(AuthFormContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://flower.elevateegy.com/api/v1/auth/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      })

      const result = await res.json()

      if (res.ok) {
        console.log(result)
        Swal.fire({
          icon: 'success',
          title: 'Confirmation Message',
          text: result.info,
        })
        getSetPassword()
      } 
      else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: result.message || 'Please enter a valid email address.',
        })
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again later.',
      })
    }
  }

  const closeForget = (e: any) => {
    e.stopPropagation()
    if (Array.from(e.target.classList).includes("h-screen")) {
      closeAll()
    }
  }

  return (
    <div
      onClick={closeForget}
      className="h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center"
    >
      <div className="w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]">
        <h2 className="text-[30px] my-8">Forget Your Password ?</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email Or Phone Number"
            className="mb-2"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
          )}

          <Button
            className="w-full text-white rounded-[30px]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Recover Password'}
          </Button>
        </form>
      </div>
    </div>
  )
}
