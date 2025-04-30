'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Zod validation schema
const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string()
})

type FormValues = z.infer<typeof schema>

export default function Account() {
  const { data: session } = useSession()

  const {
    register,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }
  })

  useEffect(() => {
    if (session?.user) {
      const user = session.user as any
      setValue("firstName", user.firstName)
      setValue("lastName", user.lastName)
      setValue("email", user.email)
      setValue("phone", user.phone)
    }
  }, [session, setValue])

  return (
    <div className="container mx-auto w-[80%] mt-20">
      <form className="w-[80%]">
        <div className="names flex gap-12">
          <div className="first w-1/2 p-4">
            <label htmlFor="fName">First Name</label>
            <Input
              className="w-full mt-2"
              placeholder="First Name"
              disabled
              {...register("firstName")}
            />
          </div>
          <div className="last w-1/2 p-4">
            <label htmlFor="lName">Last Name</label>
            <Input
              className="w-full mt-2"
              placeholder="Last Name"
              disabled
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="Emails flex gap-12 mt-4">
          <div className="first w-1/2 p-4">
            <label htmlFor="email">Email</label>
            <Input
              className="w-full mt-2"
              placeholder="Email"
              disabled
              {...register("email")}
            />
          </div>
          <div className="last w-1/2 p-4">
            <label htmlFor="phone">Phone</label>
            <Input
              className="w-full mt-2"
              placeholder="Phone"
              disabled
              {...register("phone")}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="button" className="text-white bg-rose py-[10px] px-[20px] rounded-[10px] my-8 cursor-pointer">
            Update Profile <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  )
}
