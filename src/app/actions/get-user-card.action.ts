"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function getCartAction() {
  try {
    // get Session
    const session = await getServerSession(authOptions);

    // get token from session
    const token = session?.token;

    if (!token) {
      throw new Error("Unauthorized: No token found in session.");
    }

    // fetch cart data
    const response = await fetch(`https://flower.elevateegy.com/api/v1/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong while fetching cart data.");
    }

    return data;  // return cart data
  } 
  catch (error: any) {
    console.error("Get cart error:", error.message);
    throw new Error(error.message || "Internal Server Error");
  }
}
