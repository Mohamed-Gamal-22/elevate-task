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


    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Remove cart item error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Remove cart item unknown error:", error);
      throw new Error("Internal Server Error");
    }
  }
}
