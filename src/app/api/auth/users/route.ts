import { db } from "../../../database";
import { User } from "../../../models";

export async function GET(req: Request, res: Response) {
  try {
    await db.connect();

    const UserList = await User.find()

    return new Response(JSON.stringify(UserList), {
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