import { NextRequest, NextResponse } from 'next/server';
import { db } from "../../database";
import { About } from "../../models";

export async function GET(req: NextRequest, res: NextResponse) {
 try {
  await db.connect();

  const aboutList = await About.find()

  return new NextResponse(JSON.stringify(aboutList), {
   status: 201,
   headers: { 'Content-Type': 'application/json' }
  });
 } catch (error) {
  console.log(error);
  return new NextResponse(JSON.stringify(error), {
   status: 201,
   headers: { 'Content-Type': 'application/json' }
  });
 }
}