import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){

let response = await fetch(`${process.env.API}/best-seller`);
let data = await response.json()

    return NextResponse.json({data})
}