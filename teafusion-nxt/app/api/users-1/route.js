import { NextResponse } from "next/server";
import { table1 } from "../../table-1";

export async function GET(){
    return NextResponse.json(table1)
}