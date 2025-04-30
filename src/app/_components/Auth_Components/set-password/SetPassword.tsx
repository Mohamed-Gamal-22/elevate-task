'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Swal from 'sweetalert2'
import { AuthFormContext } from '@/app/context/AuthForm'


const schema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof schema>

export default function SetPassword() {

  const context = useContext(AuthFormContext)

  if (!context) {
    throw new Error("AuthFormContext must be used within an AuthFormContextProvider");
  }

  const { closeAll } = context

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('https://flower.elevateegy.com/api/v1/auth/resetPassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          newPassword: data.password,
        }),
      })

      const response = await res.json()

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Password Updated',
          text: 'You can now log in with your new password.',
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Reset Failed',
          text: response?.message || 'Invalid reset attempt',
        })
      }
    } catch (error: unknown) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: `${error}` || 'Something went wrong. Please try again later.',
      })
    }
  }

  function handleVerify(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  
    const target = e.target as HTMLElement;
    if (target.classList.contains("h-screen")) {
      closeAll();
    }
  }

  return (
    <div onClick={(e) => {handleVerify(e)}} className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
      <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
        <h2 className='text-[30px] my-8'>Set The New Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder='Enter Email'
            className='mb-2'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mb-4'>{errors.email.message}</p>
          )}

          <Input
            placeholder='Create New Password'
            type='password'
            className='mb-2'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-red-500 text-sm mb-4'>{errors.password.message}</p>
          )}

          <Input
            placeholder='Confirm Password'
            type='password'
            className='mb-2'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm mb-4'>{errors.confirmPassword.message}</p>
          )}

          <Button
            className='w-full text-white rounded-[30px]'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Set The Password'}
          </Button>
        </form>
      </div>
    </div>
  )
}
