"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";


export async function clearCartAction() {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.token;

    if (!token) {
      throw new Error("Unauthorized: No token found in session.");
    }

    const response = await fetch("https://flower.elevateegy.com/api/v1/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await response.json();


    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // console.error("Clear cart error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Clear cart unknown error:", error);
      throw new Error("Internal Server Error");
    }
  }
}
