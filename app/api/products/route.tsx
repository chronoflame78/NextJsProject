import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

interface Props {
    params: {id: number}
}

export function GET(request: NextRequest, {params}: Props){

    return NextResponse.json([
        {id: 1, name: "Milk", price: 2.5},
        {id: 2, name: "Bread", price: 3.5},
        {id: 3, name: "Water", price: 1},
    ])
}

export async function POST(request: NextRequest){
    const body = await request.json();

    const validation = schema.safeParse(body);

    if(!validation.success) return NextResponse.json({error: validation.error.errors}, {status: 400});
    
    return NextResponse.json({id: 10, name: body.name, price: body.price}, {status: 201});
}


export async function PUT(request: NextRequest, {params}: Props){
    const body = await request.json();
    const validation = schema.safeParse(body);

     if(!validation.success) 
         return NextResponse.json({error: validation.error.errors}, {status: 400});

    if (params.id > 10)
        return NextResponse.json({error: "User not found"}, {status: 404})
    

    return NextResponse.json({id: params.id, name: body.name})
}

export async function DELETE(request: NextRequest, {params}: Props){
    if(params.id > 10)
        return NextResponse.json({error: "User not found"}, {status: 404});
    
    return NextResponse.json({});
}