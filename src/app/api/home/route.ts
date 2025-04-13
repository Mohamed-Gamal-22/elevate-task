import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){

let response = await fetch(`${process.env.API}/home`);
let data = await response.json()
console.log("homeeeeeeee",data)

    return NextResponse.json({data})
}