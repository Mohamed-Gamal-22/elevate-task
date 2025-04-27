"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

type RemoveCartItemInput = {
  cartItemId: string;
};

export async function removeCartItemAction({ cartItemId }: RemoveCartItemInput) {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.token;

    if (!token) {
      throw new Error("Unauthorized: No token found in session.");
    }

    const response = await fetch(`https://flower.elevateegy.com/api/v1/cart/${cartItemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Failed to remove cart item:");
      console.error("Status:", response.status);
      console.error("Response:", data);
      throw new Error(data.message || "Something went wrong while removing cart item.");
    }

    return data;
  } catch (error: any) {
    console.error("Remove cart item error:", error.message);
    throw new Error(error.message || "Internal Server Error");
  }
}
