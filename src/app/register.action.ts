'use server'

import { JSON_HEADER } from "../lib/constants/api.constant";

export async function registerUser(data: any) {
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
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Unknown error'
    };
  }
}
