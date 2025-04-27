"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

type UpdateCartQuantityInput = {
  cartItemId: string;     // ID of the cart item
  newQuantity: number;    // New quantity to update
};

export async function updateCartQuantityAction({ cartItemId, newQuantity }: UpdateCartQuantityInput) {
  try {
    // get Session
    const session = await getServerSession(authOptions);

    // get token from session
    const token = session?.token;

    if (!token) {
      throw new Error("Unauthorized: No token found in session.");
    }

    // update cart item quantity with PUT method
    const response = await fetch(`https://flower.elevateegy.com/api/v1/cart/${cartItemId}`, {
      method: "PUT",   // changed to PUT
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        quantity: newQuantity,
      }),
      cache: "no-store",
    });

    const data = await response.json();
    console.log(data)

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong while updating cart item.");
    }

    return data;  // return updated cart item data
  } 
  catch (error: any) {
    console.error("Update cart quantity error:", error.message);
    throw new Error(error.message || "Internal Server Error");
  }
}
