'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Swal from 'sweetalert2'
import { AuthFormContext } from '@/app/context/AuthForm'

const schema = z.object({
  code: z.string().regex(/^\d{6}$/, 'Code must be exactly 6 digits'),
})

type FormData = z.infer<typeof schema>

export default function VerifyCode() {

  const context = useContext(AuthFormContext);

  if (!context) {
    throw new Error('AuthFormContext must be used within an AuthFormProvider');
  }


  const {setNewPass, closeAll} = context

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://flower.elevateegy.com/api/v1/auth/verifyResetCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetCode: data.code }),
      })

      const result = await response.json()

      if (response.ok) {
        if(result.status == "Success") {
          Swal.fire({
            icon : "success",
            title : "Code Is Right",
            text : "You Can Create New Password",
          })
          setNewPass()
        }
      } else {
        throw new Error(result.message || 'Invalid reset code')
      }
    } catch (error: unknown) {
      let message = 'Please enter a valid 6-digit code';
      
      if (error instanceof Error) {
        message = error.message;
      }
    
      Swal.fire({
        icon: 'error',
        title: 'Invalid Code',
        text: message,
      });
    }
  }

  function handleVerify(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  
    if ((e.target as HTMLElement).classList.contains("h-screen")) {
      closeAll();
    }
  }

  return (
    <div onClick={(e) => {handleVerify(e)}} className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
      <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
        <h2 className='text-[30px] my-8'>Verify Code</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder='Enter Code'
            className='mb-2'
            {...register('code')}
          />
          {errors.code && (
            <p className='text-red-500 text-sm mb-4'>{errors.code.message}</p>
          )}

          <p className='text-end my-8 text-[#313131]'>
            Didn&apos;t Receive The Code?{' '}
            <span className='color-rose underline cursor-pointer'>Resend</span>
          </p>

          <Button
            className='w-full text-white rounded-[30px]'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Recover Password'}
          </Button>
        </form>
      </div>
    </div>
  )
}
