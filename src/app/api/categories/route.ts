import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){


// /best-seller will change with product of spicific category

let response = await fetch(`${process.env.API}/home`);
let data = await response.json()

    return NextResponse.json({data})
}