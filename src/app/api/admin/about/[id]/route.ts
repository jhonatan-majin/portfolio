import { NextResponse, NextRequest } from "next/server";
import { db } from "../../../../database";
import { About } from "../../../../models";
import { isValidObjectId } from "mongoose";

const url = process.env.API_URL;

interface Params {
  params: Promise<{id: string}>
}


  export async function DELETE(req: NextRequest, {params}: Params, res: NextResponse) {
  
    try {
      await db.connect();
      const { id } = await params;

      const about = await About.findByIdAndDelete(id);
  
    return new Response(JSON.stringify(about), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }


  export async function PUT(req: NextRequest, {params}: Params, res: NextResponse) {
  
    try {
      await db.connect();

      const { id } = await params;

      const body = await req.json();

      if (!isValidObjectId(id)) {
        return NextResponse.json(
              { message: `El ID ${id} de la seccion Acerca de no es válido` },
              { status: 404 }
            );
      }

      const about = await About.findByIdAndUpdate(id, body);
 
    return NextResponse.json({message: `Acerca de con el ID ${id} se actulizo correctamente`, data: body}, { status: 200 });

  
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }


  

