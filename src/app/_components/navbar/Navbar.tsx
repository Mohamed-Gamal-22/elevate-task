"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/images/Group 3.svg"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Briefcase, Heart, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AuthFormContext } from '@/app/context/AuthForm'
import Register from '../Auth_Components/register/Register'
import Login from '../Auth_Components/login/Login'
import { CartContext } from '@/app/context/CartContext'
import { useSession } from 'next-auth/react'
import Logout from '../logout/Logout'



export default function Navbar() {
  const router = useRouter()
  const path = usePathname()

  const { data: session } = useSession()
  const { getLogin, getRegister, login, register } = useContext<any>(AuthFormContext);
  const { numberOfCartItem } = useContext<any>(CartContext)

  return (
    <>
      {login && <Login />}
      {register && <Register />}

      <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="logo">
            <Image src={logo} alt='Rose logo'/>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className="items-center md:order-last justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
            <div className="links my-7">
              <ul className='flex gap-6 items-center'>
                <li><Link href="/" className={path === "/" ? "color-rose" : ""}>Home</Link></li>
                <li><Link href="/category" className={path === "/category" ? "nav-active" : ""}>All Category</Link></li>
                <li><Link href="/about" className={path === "/about" ? "nav-active" : ""}>About</Link></li>
                <li><Link href="/contact" className={path === "/contact" ? "nav-active" : ""}>Contact</Link></li>
              </ul>
            </div>

            <div className="login flex items-center gap-2 my-10">
              <div className="icons flex gap-5 items-center">
                <Search className='color-rose ms-3 cursor-pointer' />
                <div className="heart relative">
                  <Heart className='color-rose cursor-pointer'/>
                  <div className="notification absolute size-5 top-[-17px] end-[-9px] bg-rose text-white flex justify-center items-center rounded-full">2</div>
                </div>
                <div className="bag relative">
                  <Briefcase onClick={() => router.push('/cart')} className='color-rose cursor-pointer'/>
                  {numberOfCartItem ? (
                    <div className="notification absolute size-5 top-[-17px] end-[-9px] bg-rose text-white flex justify-center items-center rounded-full">{numberOfCartItem}</div>
                  ) : null}
                </div>
                <div className="user relative me-3" title="Profile" onClick={() => router.push("/account")}>
                  <User className='color-rose cursor-pointer'/>
                </div>
              </div>

              {/* if login show signout */}
              {session ? (
                <Logout />
              ) : (
                <Button onClick={() => getLogin()} className='rounded-[30px] py-2 px-5 text-white bg-rose hover:bg-rose/90'>
                  Login
                </Button>
              )}

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
