'use client'
import React, { useContext, useEffect, useState } from 'react'
import { BriefcaseBusiness, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import { CartContext } from '@/app/context/CartContext'
import Swal from 'sweetalert2'
import { useSession } from "next-auth/react"
import { Product } from '@/types/product.type.'
import style from "./favorite.module.css"
import Link from 'next/link'
import StarsRating from '../_components/stars-rating/StarsRating'
import { useRouter } from 'next/navigation'

export default function Favorite() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("CartContext must be used within a CartContextProvider")
  }

  const { addToCard } = context
  const { data: session } = useSession()
  const [favorites, setFavorites] = useState<Product[]>([])
  const router = useRouter()

  function checkLogin(id: string) {
    if (!session) {
      Swal.fire({
        title: "You Are Not Logged In Yet!",
        icon: "info",
      }).then(() => {
        setTimeout(()=>{
          router.push("/")
        },2500)
      })
      return
    }
    addToCard(id, 1)
  }

  async function getFavorites() {
    try {
      const response = await fetch(`http://localhost:3000/api/home`, {
        cache: "no-store"
      })
      const data = await response.json()
      setFavorites(data.data.products)
    } catch (error) {
      console.error("Failed to load favorites:", error)
    }
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <>
      <div className="container w-[80%] mx-auto mt-20">
        <h2 className={`${style.test} text-3xl font-bold mt-12 mb-8`}>My Favorites</h2>
      </div>

      <div className="flex flex-wrap p-3 gap-y-8 container w-[80%] mx-auto">
        {favorites?.map((product) => (
          <Link
            href={`/product-details?id=${product._id}`}
            key={product._id}
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative p-3 block'
          >
            <div className="main relative">
              <div className={`relative w-full h-[250px] ${style.imageContainer}`}>
                <Image
                  src={product.imgCover}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className='rounded-[20px]'
                />
              </div>
              <div className="layer flex justify-center items-center gap-10 absolute inset-0 bg-[#F82BA9] bg-opacity-0 rounded-2xl opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300">
                <div className='bg-[#F82BA9] p-1 rounded-full'>
                  <Eye className='size-8 text-white cursor-pointer' />
                </div>
                <div className='bg-[#F82BA9] p-1 rounded-full'>
                  <Heart className='size-8 text-white cursor-pointer' />
                </div>
              </div>
            </div>

            <h3 className='font-bold line-clamp-1'>{product.title}</h3>

            <div className="footer flex justify-between items-center">
              <div className="left">
                <div className="stars flex gap-1 my-2">
                  <StarsRating product={product} />
                </div>
                <p className="color-rose">Price: ${product.price.toFixed(2)}</p>
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault()
                  checkLogin(product._id)
                }}
                className="right bg-[#8C52FF] text-white p-2 rounded-full cursor-pointer"
              >
                <BriefcaseBusiness />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
