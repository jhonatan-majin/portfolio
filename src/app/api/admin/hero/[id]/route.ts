import { NextResponse, NextRequest } from "next/server";
import { db } from "../../../../database";
import { Hero } from "../../../../models";
import { isValidObjectId } from "mongoose";

const url = process.env.API_URL;

interface Params {
  params: Promise<{id: string}>
}


   export async function GET(req: NextRequest, {params}: Params, res: NextResponse) {
  
    try {
      await db.connect();
      const { id } = await params;

      const hero = await Hero.findById(id);
  
    return new Response(JSON.stringify(hero), {
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
  


  export async function DELETE(req: NextRequest, {params}: Params, res: NextResponse) {
  
    try {
      await db.connect();
      const { id } = await params;

      const hero = await Hero.findByIdAndDelete(id);
  
    return new Response(JSON.stringify(hero), {
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
              { message: `El ID ${id} del hero no es válido` },
              { status: 404 }
            );
      }

      const hero = await Hero.findByIdAndUpdate(id, body);

    //  await roject.updateOne(req.body);
    return NextResponse.json({message: `Hero con el ID ${id} actualizado`, data: body}, { status: 200 });

    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

