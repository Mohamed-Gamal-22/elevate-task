"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/images/Group 3.svg"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Briefcase, Heart, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Login from '../Auth_Components/login/Login'
import { LoginContext } from '@/app/context/LoginContext'


export default function Navbar() {

  const {showLogin ,setshowLogin} = useContext(LoginContext)


  let path = usePathname()
  // console.log(path)

  return <>
    {showLogin && <Login />}
    <div className="navbar py-6">
      <div className='container w-[80%] mx-auto flex justify-between items-center'>
        <div className="logo">
          <Image src={logo} alt='Rose logo'/>
        </div>
        <div className="links">
          <ul className='flex gap-6 items-center'>
            <li><Link href="/" className={path == "/" ? "color-rose" : ""}>Home</Link></li>
            <li><Link href="/category" className={path == "/category" ? "nav-active" : ""}>All Category</Link></li>
            <li><Link href="/about" className={path == "/about" ? "nav-active" : ""}>About</Link></li>
            <li><Link href="/contact" className={path == "/contact" ? "nav-active" : ""}>Contact</Link></li>
          </ul>
        </div>
        <div className="login flex items-center gap-2">
          <div className="icons flex gap-5 items-center">
          <Search className='color-rose'/>
          <div className="heart relative">
            <Heart className='color-rose'/>
            <div className="notification absolute size-5 top-[-17px] end-[-9px] bg-rose text-white flex justify-center items-center  rounded-full">2</div>
          </div>
          <div className="bag relative">
            <Briefcase className='color-rose'/>
            <div className="notification absolute size-5 top-[-17px] end-[-9px] bg-rose text-white flex justify-center items-center  rounded-full">2</div>
          </div>
          <div className="user relative">
            <User className='color-rose'/>
            <div className="notification absolute size-5 top-[-17px] end-[-9px] bg-rose text-white flex justify-center items-center  rounded-full">2</div>
          </div>
          </div>
          <Link href="/">
            <Button onClick={() => {setshowLogin(!showLogin)}} className='rounded-[30px] py-2 px-5 text-white'>Login</Button>
          </Link>
        </div>
      </div>

    </div>
  </>
}
