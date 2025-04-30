"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from "./Primum.module.css"
import { Button } from '@/components/ui/button'
import { ArrowRight, BriefcaseBusiness } from 'lucide-react'
import Image from 'next/image'
import Slider from "react-slick";
import SampleNextArrow from '../Arrows/next-arrow/NextArrow'
import SamplePrevArrow from '../Arrows/prev-arrow/PrevArrow'
import { Product } from '../../../types/product.type.'
import StarsRating from './../stars-rating/StarsRating';
import { CartContext } from '@/app/context/CartContext'
import { useSession } from "next-auth/react";
import Swal from 'sweetalert2'
import Link from 'next/link'

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function PremiumGifts() {

  const { addToCard } = useContext<any>(CartContext)
  const { data: session } = useSession();

  const [data, setdata] = useState<Product[]>([])

  function checkLogin(id: string) {
    if (!session) {
      Swal.fire({
        title: "You Are Not Logged In Yet!",
        icon: "info"
      });
      return;
    }
    addToCard(id)
  }

  async function getBest() {
    let response = await fetch(`http://localhost:3000/api/best-seller`)
    let data = await response.json()
    setdata(data.data.bestSeller)
  }

  useEffect(() => {
    getBest()
  }, [])

  return (
    <div className="parent flex flex-wrap container w-[80%] mx-auto">
      <div className="first w-full lg:w-1/4 p-3">
        <h3 className={`color-rose font-bold ${style.letter} mb-7`}>Premium Gifts</h3>
        <h2 className='font-bold text-2xl my-4'>Best <span className='color-rose'>Seller Gifts</span> And Products</h2>
        <p className='text-[#757F95] mb-5'>
          Recusandae tempora aut laborum molestias veniam. A commodi sequi accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta necessitatibus ut ad.
        </p>
        <Button className='text-white py-[10px] px-[20px]'>
          Explore More <ArrowRight />
        </Button>
      </div>

      <div className="w-full lg:w-3/4 p-3 product">
        <Slider {...settings}>
          {data?.map((product) => (
            <Link key={product._id} href={`/product-details?id=${product._id}`} className='relative p-3 block'>
              <div>
                <div className={`relative w-full h-[250px] ${style.imageContainer}`}>
                  <Image
                    src={product.imgCover}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className='font-bold'>{product.title}</h3>
                <div className="footer flex justify-between items-center">
                  <div className="left">
                    <div className="stars flex gap-1 my-2">
                      <StarsRating product={product} />
                    </div>
                    <p className='color-rose'>price : ${product.price}</p>
                  </div>
                  <div
                    onClick={(e) => {
                      e.preventDefault(); // Stop the link navigation
                      checkLogin(product._id);
                    }}
                    className="right bg-[#8C52FF] text-white p-2 rounded-full cursor-pointer"
                  >
                    <BriefcaseBusiness />
                  </div>
                </div>
                <div className="notification absolute top-0 end-0 bg-rose text-white px-3 py-0 rounded-2xl">
                  new
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
