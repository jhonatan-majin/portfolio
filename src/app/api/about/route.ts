
import { db } from "../../database";
import { About } from "../../models";

export async function GET(req: Request, res: Response) {
 try {
  await db.connect();

  const aboutList = await About.find()

  return new Response(JSON.stringify(aboutList), {
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