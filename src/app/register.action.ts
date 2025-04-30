'use server'

import { RegisterFormData } from "@/types/register";
import { JSON_HEADER } from "../lib/constants/api.constant";

export async function registerUser(data: RegisterFormData) {
  try {
    const res = await fetch(`${process.env.API}/auth/signup`, {
      method: 'POST',
      headers: {
        ...JSON_HEADER
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result)

    if (!res.ok) {
      throw new Error(result.error || 'Something went wrong');
    }

    return {
      success: true,
      data: result
    };
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (error instanceof Error) {
      message = error.message;
    }
  
    return {
      success: false,
      error: message
    };
  }
}
