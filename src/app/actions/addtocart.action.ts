"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
// import { cookies } from "next/headers";

type AddToCartInput = {
  product: string;    // product ID
  quantity: number;   // quantity to add
};

export async function addToCartAction({ product, quantity }: AddToCartInput) {
  try {
    // get Session
    const session = await getServerSession(authOptions);

    // get token from session
    const token = session?.token;

    if (!token) {
      throw new Error("Unauthorized: No token found in session.");
    }

    // add to card
    const response = await fetch(`${process.env.API}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // include Bearer
      },
      body: JSON.stringify({
        product,
        quantity,
      }),
      cache: "no-store", // no store cache
    });

    const data = await response.json();

    if (!response.ok) {

      // if server error
      throw new Error(data.message || "Something went wrong while adding to cart.");
    }

    return data;  // return data
  } 
  catch (error: unknown) {
    if (error instanceof Error) {
      // console.error("Add to cart error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Add to cart unknown error:", error);
      throw new Error("Internal Server Error");
    }
  }
}
