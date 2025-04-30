import {  NextResponse } from "next/server";

export async function GET(){

const response = await fetch(`${process.env.API}/home`);
const data = await response.json()
console.log("homeeeeeeee",data)

    return NextResponse.json({data})
}