import { NextRequest, NextResponse } from "next/server";

interface Props {
    id: number
}

export function GET(request: NextRequest, params: Props){
    //Fetch data from a db
    //If not found return 404 error
    //Else return data
    if (params.id > 10){
        return NextResponse.json({error: "User not found"}, {status: 404})
    }

    return NextResponse.json({id: params.id, name: "Mosh"})
}
