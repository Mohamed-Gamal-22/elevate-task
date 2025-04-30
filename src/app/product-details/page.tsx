"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Slider from "react-slick";
import { BriefcaseBusiness, Heart, Play } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://flower.elevateegy.com/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data.product);
        setMainImage(data.product.imgCover); // نخلي الصورة الرئيسية
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!product) return <div className="text-center py-20 text-red-500">Product not found</div>;

  return (
    <div className="container w-[80%] mx-auto flex flex-wrap">
      {/* Images Section */}
      <div className="image w-full md:w-1/3 p-4 relative">
        <div className="border rounded-md overflow-hidden">
          <Image
            src={mainImage}
            alt="Main product image"
            width={500}
            height={500}
            className="w-full h-[400px] object-contain"
          />
        </div>

        <div className="mt-4">
          <Slider {...sliderSettings}>
            {[product.imgCover, ...product.images].map((img: string, i: number) => (
              <div key={i} className="px-1 cursor-pointer" onClick={() => setMainImage(img)}>
                <Image
                  src={img}
                  alt={`thumbnail-${i}`}
                  width={100}
                  height={100}
                  className="w-full h-[100px] object-cover border rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        <Play className="absolute top-0 right-0 cursor-pointer text-slate-800" />
      </div>

      {/* Product Details */}
      <div className="details w-full md:w-2/3 px-4">
        <h2 className="text-dark text-[25px] font-bold">{product.title}</h2>

        <div className="flex gap-2 items-center my-4">
          <span className="text-[18px] text-[#757F95] line-through">${product.price}</span>
          <span className="text-[23px] font-[500] text-rose-600">${product.priceAfterDiscount}</span>
          <span className="text-[15px] font-[500] text-[#F05454]">{product.discount}% off</span>
        </div>

        <p className="leading-7 text-[#757F95]">{product.description}</p>

        {/* Quantity / Size / Color */}
        <div className="info flex flex-wrap gap-4 my-6">
          <div className="quantity w-full sm:w-[30%]">
            <h3 className="my-2 text-[#757F95]">Quantity</h3>
            <div className="flex items-center gap-3">
              <button className="text-rose-600 text-xl">-</button>
              <span className="text-rose-600">1</span>
              <button className="text-rose-600 text-xl">+</button>
            </div>
          </div>

          <div className="size w-full sm:w-[30%]">
            <h3 className="my-2 text-[#757F95]">Size</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
                <SelectItem value="xl">X-Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="color w-full sm:w-[30%]">
            <h3 className="my-2 text-[#757F95]">Color</h3>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer" />
              <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer" />
              <div className="w-6 h-6 rounded-full bg-green-500 cursor-pointer" />
              <div className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <ul className="text-[#757F95] list-disc space-y-2 pl-5">
          <li><strong>Stock:</strong> {product.quantity > 0 ? "Available" : "Out of stock"}</li>
          <li><strong>Sold:</strong> {product.sold}</li>
          <li><strong>Rate:</strong> {product.rateAvg} ({product.rateCount} ratings)</li>
        </ul>

        {/* Add to Cart */}
        <div className="flex items-center gap-4 mt-6">
          <Button className="bg-rose-600 text-white flex items-center gap-2 px-4 py-2 rounded-md">
            <BriefcaseBusiness className="w-4 h-4" /> Add to Cart
          </Button>
          <div className="w-9 h-9 flex items-center justify-center bg-rose-600 text-white rounded-full cursor-pointer">
            <Heart />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border p-4 rounded text-center text-[#757F95]">
            No related products yet.
          </div>
        </div>
      </div>
    </div>
  );
}
