'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const checkoutSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

export default function Checkout() {
  const { data: session } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()

  const subtotal = searchParams.get('subtotal') || '0'
  const discount = searchParams.get('discount') || '0'
  const shipping = searchParams.get('shipping') || '0'
  const total = searchParams.get('total') || '0'

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      const token = session?.token
      const res = await fetch('https://flower.elevateegy.com/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          shippingAddress: {
            street: data.street,
            city: data.city,
            phone: session?.user?.phone,
          },
        }),
      })

      const result = await res.json()

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Order Placed!',
          text: 'Your order has been successfully created.',
        })
        setTimeout(() => {
          router.push('/orders')
        }, 2500)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Checkout Failed',
          text: result?.message || 'Something went wrong. Please try again.',
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Could not connect to the server. Please try again later.',
      })
      console.error('Checkout Error:', error)
    }
  }

  useEffect(() => {
    if (session?.user?.phone) {
      setValue('street', '')
      setValue('city', '')
    }
  }, [session, setValue])

  return (
    <div className={`container w-[80%] mx-auto px-4 md:px-10 ${inter.className}`}>
      <h2 className="font-bold text-[#F82BA9] mb-6 text-lg md:text-2xl">Your Billing Address</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-3/4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input disabled value={session?.user?.firstName || ''} placeholder="First Name" />
            <Input disabled value={session?.user?.lastName || ''} placeholder="Last Name" />
            <Input disabled value={session?.user?.email || ''} placeholder="Email" />
            <Input disabled value={session?.user?.phone || ''} placeholder="Phone" />
          </div>

          <div className="space-y-2">
            <label htmlFor="street" className="block font-medium">Street</label>
            <Input id="street" placeholder="Street" {...register('street')} />
            {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="city" className="block font-medium">City</label>
            <Input id="city" placeholder="City" {...register('city')} />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>

          <div className="flex justify-between mt-6">
            <Button
              type="button"
              className="bg-rose text-white py-2 px-4 rounded"
              onClick={() => router.push('/cart')}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back To Cart
            </Button>
            <Button type="submit" className="bg-rose text-white py-2 px-4 rounded">
              Order Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </form>

        <div className="w-full lg:w-1/4 bg-slate-100 p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-4">Cart Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Sub Total:</span>
              <span className="text-[#757F95]">${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Discount:</span>
              <span className="text-[#757F95]">${discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Shipping:</span>
              <span className="text-[#757F95]">${shipping}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span className="text-[#F82BA9]">${total}</span>
            </div>
          </div>
          <div className="text-end mt-6">
            <Button className="bg-rose text-white py-2 px-4 rounded">
              Discover More <ArrowRight className="inline ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-[#212529] mt-20 text-lg md:text-2xl">Your Payment Info</h2>
    </div>
  )
}
