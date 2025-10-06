import { NextResponse, NextRequest } from "next/server";
import { db } from "../../../database";
import { User } from "../../../models";
import bcrypt from "bcryptjs";
import { jwt } from "../../../utils";



export async function POST(req: NextRequest, res: NextResponse) {

 const { email = "", password = "" } = await req.json();

 db.connect();
 const user = await User.findOne({ email });

 if (!user) {
  return NextResponse.json({ message: `Usuario no encontrado.` }, { status: 400 });
 }

 if (!bcrypt.compareSync(password, user.password!)) {
  return NextResponse.json({ message: `Contraseña incorrecta.` }, { status: 400 });
 }

 const { role, id } = user;

 const token = jwt.signToken(id, email);

 return NextResponse.json({
  token,
  user: {
   id,
   email,
   role,
  },
 }, { status: 200 });

}

