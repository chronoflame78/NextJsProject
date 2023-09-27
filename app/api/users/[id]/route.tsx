import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";

interface Props {
    params: {id: number}
}

export function GET(request: NextRequest, {params}: Props){
    //Fetch data from a db
    //If not found return 404 error
    //Else return data
    if (params.id > 10){
        return NextResponse.json({error: "User not found"}, {status: 404})
    }

    return NextResponse.json({id: params.id, name: "Mosh"})
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