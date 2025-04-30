import { NextResponse } from "next/server";

export async function GET(){


// /best-seller will change with product of spicific category

const response = await fetch(`${process.env.API}/home`);
const data = await response.json()

    return NextResponse.json({data})
}