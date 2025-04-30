"use client";

import React, { useContext, useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CircleX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

export default function Cart() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { getLogedUserCard, updateProductQuantity, removeSpecificProduct, clearUserCard } = useContext<any>(CartContext);
  const [CartDetails, setCartDetails] = useState<any>(null);

  async function prepareData() {
    const response = await getLogedUserCard();
    setCartDetails(response.cart);
  }

  async function updateQuantity(id: string, newCount: number) {
    if (newCount === 0) {
      removeItem(id);
      return;
    }
    const response = await updateProductQuantity(id, newCount);
    if (response.message === "success") {
      setCartDetails(response.cart);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Updated Successfully",
        showConfirmButton: true,
        timer: 1500
      });
    }
  }

  async function removeItem(itemId: string) {
    const response = await removeSpecificProduct(itemId);
    if (response.message === "success") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Removed Successfully",
        showConfirmButton: true,
        timer: 1500
      });
      prepareData();
    }
  }

  async function clearCart() {
    const response = await clearUserCard();
    if (response.message === "success") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cart Cleared Successfully",
        showConfirmButton: true,
        timer: 1500
      });
      prepareData();
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      if (!session) return;
      const token = session?.token;
      if (!token) {
        Swal.fire({
          title: "You Are Not Logged In yet !",
          confirmButtonText: "Got It",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Please Login To See Your Cart !", "", "info");
          }
        });
        setTimeout(() => {
          router.push('/')
        }, 2000);
      } else {
        await prepareData();
      }
    };

    checkAuth();
  }, [session]);

  if (status === "loading" || CartDetails === null) {
    return (
      <h1 className="bg-red-300 font-bold text-[30px] text-center w-[80%] mx-auto p-4 my-4">
        Loading...
      </h1>
    );
  }

  if (CartDetails.cartItems.length === 0) {
    return (
      <h1 className="bg-yellow-300 font-bold text-[30px] text-center w-[80%] mx-auto p-4 my-4">
        No Data to Show
      </h1>
    );
  }

  return (
    <div className="container w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-6">
      <div className="my-table w-full lg:w-2/3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-16 py-3">Image</th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Sub Total</th>
                <th className="px-6 py-3">Remove</th>
              </tr>
            </thead>
            <tbody>
              {CartDetails.cartItems.map((item: any) => (
                <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4">
                    <Image
                      width={64}
                      height={100}
                      src={item.product.imgCover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt={item.product.title}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {item.product.title}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ${item.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                        className="inline-flex items-center justify-center p-1 me-3 h-6 w-6 text-[#F82BA9]"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <span className="text-[#F82BA9]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-[#F82BA9]"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ${item.price * item.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      onClick={() => removeItem(item.product._id)}
                      className="text-[#F82BA9] cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
          <form className="flex items-center w-full sm:w-auto relative">
            <Input className="w-[300px] " placeholder="Enter Your Email" />
            <Button className="text-white py-[10px] px-[20px] rounded-[30px] absolute end-[50px] top-0 md:end-[-50px] me-8">
              Apply coupon <ArrowRight />
            </Button>
          </form>
          <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              router.push(
                `/checkout?subtotal=${CartDetails?.totalPrice}&discount=${CartDetails?.discount}&shipping=0&total=${CartDetails?.totalPriceAfterDiscount}`
              )
            }
            className="text-white bg-[#F82BA9] py-[20px] px-[20px] rounded-[10px]"
          >
            <ArrowLeft />
              Cash On Delivery !
          </Button>
          <Button
            onClick={() =>
              router.push(
                `/checkout-online?subtotal=${CartDetails?.totalPrice}&discount=${CartDetails?.discount}&shipping=0&total=${CartDetails?.totalPriceAfterDiscount}`
              )
            }
            className="text-white bg-[#F82BA9] py-[20px] px-[20px] rounded-[10px]"
          >
            <ArrowLeft />
            Online Payment !
          </Button>
          </div>
        </div>

        <div>
          <Button
            onClick={() => clearCart()}
            className="mt-8 text-white bg-[#F82BA9] py-[18px] px-[20px] rounded-[20px] w-full"
          >
            Clear Cart
          </Button>
        </div>
      </div>

      <div className="cart-details w-full lg:w-1/3">
        <h2 className="font-bold my-8 text-xl">Cart Summary</h2>
        <div className="flex justify-between my-2">
          <span className="font-bold">Sub Total:</span>
          <span className="text-[#757F95]">${CartDetails.totalPrice}</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-bold">Discount:</span>
          <span className="text-[#757F95]">%{CartDetails.discount}</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-bold">Shipping:</span>
          <span className="text-[#757F95]">Free</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-bold">Total:</span>
          <span className="text-[#F82BA9] font-bold">${CartDetails.totalPriceAfterDiscount}</span>
        </div>
        <div className="text-end">
          <Button className="text-white bg-[#F82BA9] py-[10px] px-[20px] rounded-[10px] my-8">
            Discover More <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
