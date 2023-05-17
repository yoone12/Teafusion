import { NextResponse } from "next/server";
import { table } from "../../table";

export async function GET(){
    return NextResponse.json(table)
}