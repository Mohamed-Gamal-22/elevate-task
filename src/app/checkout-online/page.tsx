'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const checkoutSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

export default function CheckoutOnline() {
  const { data: session } = useSession()
  const router = useRouter()

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
      const phone = session?.user?.phone

      const res = await fetch(
        'https://flower.elevateegy.com/api/v1/orders/checkout?url=http://localhost:3000',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            shippingAddress: {
              street: data.street,
              city: data.city,
              phone: phone,
            },
          }),
        }
      )

      const result = await res.json()
      console.log(result)

      if (result.message == "success") {
        Swal.fire({
          icon: 'success',
          title: 'Redirecting to payment...',
          showConfirmButton: false,
          timer: 2500,
        })

        setTimeout(() => {
          window.location.href = result.session.url
        }, 1500)
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
      console.error('CheckoutOnline Error:', error)
    }
  }

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [session, router])

  return (
    <div className={`container w-[80%] mx-auto px-4 md:px-10 ${inter.className}`}>
      <h2 className="font-bold text-[#F82BA9] mb-6 text-lg md:text-2xl">Your Billing Address</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            Checkout Online
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
