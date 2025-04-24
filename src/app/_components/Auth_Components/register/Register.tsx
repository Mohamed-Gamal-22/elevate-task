"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterFields, registerSchema } from '@/lib/schemes/authSchema'
import { registerUser } from '@/app/register.action'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { AuthFormContext } from '@/app/context/AuthForm'


export default function Register() {

  const { closeAll, getLogin } = useContext<any>(AuthFormContext);


  const form = useForm<RegisterFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      gender: "male"
    },
    resolver: zodResolver(registerSchema)
  });

  async function handleRegister(values: RegisterFields) {
    console.log(values)
    const response = await registerUser(values);
    console.log(response)
    if(response.success) {
        // error alert
        Swal.fire({
            title: "You Registerd Successfully 😍",
            icon: "success",
            draggable: true
          });
    }
    else{
        Swal.fire({
            title: `${response.error} 💔`,
            icon: "error",
            draggable: true
          });
    }

  }

  function closeLogin(e:any){
    e.stopPropagation()
    if(Array.from(e.target.classList).includes("h-screen")){
        closeAll()
    }
}



  return (
    <div onClick={(e) => {closeLogin(e)}} className='h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
      <div className='w-[600px] bg-white rounded-[20px] shadow-md p-8 text-[14px]'>
        <h2 className='text-[30px] my-8 ms-7'>Create Account</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleRegister)}>

            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormControl>
                    <Input placeholder="First Name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormControl>
                    <Input placeholder="Last Name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormControl>
                    <Input placeholder="Email..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormControl>
                    <Input type="password" placeholder="Password..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormControl>
                    <Input type="password" placeholder="Confirm Password..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormControl>
                    <Input placeholder="Phone Number..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormControl>
                    <select {...field} className="w-full border rounded px-3 py-2">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-white rounded-[30px] mt-4">
              Create Account
            </Button>

            <p className='text-center my-8 text-[#313131]'>Already have an account?
              <span onClick={() => getLogin()} className='text-rose-500 underline ms-1 cursor-pointer'>Login</span>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
