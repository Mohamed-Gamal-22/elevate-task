"use client"
import React from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/images/Group 3.svg"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Briefcase, Heart, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'



export default function Navbar() {

  let path = usePathname()
  console.log(path)

  return <>
    <div className="navbar py-6">
      <div className='container w-[80%] mx-auto flex justify-between items-center'>
        <div className="logo">
          <Image src={logo} alt='Rose logo'/>
        </div>
        <div className="links">
          <ul className='flex gap-6 items-center'>
            <li><Link href="/" className={path == "/" ? "color-rose" : ""}>Home</Link></li>
            <li><Link href="/categories" className={path == "/categories" ? "nav-active" : ""}>All Category</Link></li>
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
          <Button className='rounded-[30px] py-2 px-5 text-white'>Login</Button>
        </div>
      </div>

    </div>
  </>
}
