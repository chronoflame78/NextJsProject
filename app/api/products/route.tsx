import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import prisma from "@/prisma/client";

interface Props {
    params: {id: number}
}

export async function GET(request: NextRequest, {params}: Props){
    const products = await prisma.product.findMany();

    return NextResponse.json(products)
}

export async function POST(request: NextRequest){
    const body = await request.json();

    const validation = schema.safeParse(body);

    if(!validation.success) return NextResponse.json({error: validation.error.errors}, {status: 400});

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })
    
    return NextResponse.json(newProduct, {status: 201});
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