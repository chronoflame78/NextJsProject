import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props){
    
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(params.id),
        }
    });

    if (!user){
        return NextResponse.json({error: "User not found"}, {status: 404})
    }

    return NextResponse.json(user)
}

//PUT for replacing the entire object, Patch for updating a part of the object
export async function PUT(request: NextRequest, {params}: Props){
    const body = await request.json();
    const validation = schema.safeParse(body);

     if(!validation.success) 
         return NextResponse.json({error: validation.error.errors}, {status: 400});

    // if(!body?.name) 
    //     return NextResponse.json({error: "Name is required"}, {status: 400});


    if (params.id > 10)
        return NextResponse.json({error: "User not found"}, {status: 404})
    

    return NextResponse.json({id: params.id, name: body.name})
}

export async function DELETE(request: NextRequest, {params}: Props){
    if(params.id > 10)
        return NextResponse.json({error: "User not found"}, {status: 404});
    
    return NextResponse.json({});
}