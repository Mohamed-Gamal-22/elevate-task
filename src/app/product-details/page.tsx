"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Slider from "react-slick";
import { BriefcaseBusiness, Heart, Play } from "lucide-react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
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
import { CartContext } from "../context/CartContext";
import { Product } from "@/types/product.type.";

export default function ProductDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }

  const { addToCard } = context;

  const { data: session } = useSession();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch(`https://flower.elevateegy.com/api/v1/products/${id}`);
      const data = await res.json();
      setProduct(data.product);
      setSelectedImage(data.product.imgCover);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error fetching product:", err.message);
      } else {
        console.error("Unknown error fetching product:", err);
      }
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) fetchProduct();
  }, [id, fetchProduct]);

  const handleAddToCart = (id: string) => {
    if (!session) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to add items to your cart.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    if (quantity > 0) {
      addToCard(id, quantity);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Quantity",
        text: "Quantity must be at least 1.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!product) return <div className="text-center py-20 text-red-500">Product not found</div>;

  return (
    <div className="container w-[80%] mx-auto flex flex-wrap">
      {/* Images Section */}
      <div className="image w-full md:w-1/3 p-4">
        <div className="relative mb-4">
          <Image
            src={selectedImage}
            alt="Selected Product Image"
            width={500}
            height={500}
            className="w-full h-[400px] object-contain"
          />
          <Play className="absolute top-0 right-0 cursor-pointer text-slate-800" />
        </div>

        {/* Thumbnail Slider */}
        <Slider {...sliderSettings}>
          {[product.imgCover, ...product.images].map((img: string, index: number) => (
            <div key={index} className="px-1">
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                width={100}
                height={100}
                className={`cursor-pointer border ${
                  selectedImage === img ? "border-rose-600" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Details Section */}
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
          {/* Quantity */}
          <div className="quantity w-full sm:w-[30%]">
            <h3 className="my-2 text-[#757F95]">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                className="text-rose-600 text-xl"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="text-rose-600">{quantity}</span>
              <button
                className="text-rose-600 text-xl"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Size */}
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

          {/* Color */}
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
          <Button
            className="bg-rose-600 text-white flex items-center gap-2 px-4 py-2 rounded-md"
            onClick={() => handleAddToCart(product._id)}
          >
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
