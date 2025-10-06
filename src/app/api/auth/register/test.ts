import { NextResponse, NextRequest } from "next/server";
import { db } from "../../../database";
import { User } from "../../../models";
import bcrypt from "bcryptjs";
import { jwt } from "../../../utils";

export async function POST(req: NextRequest, res: NextResponse) {

  const { email = "", password = "", name = "", image = "" } = await req.json();
  db.connect();
  const user = await User.findOne({ email });

  if (user) {
    return NextResponse.json({ message: `El usuario existe.` }, { status: 400 });
  }

  const newUser = new User({
    name,
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(password),
    image: "default_avatar.jpg",
    role: "client",
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
  }

  const { role, id } = newUser;

  const token = jwt.signToken(id, email);



  return NextResponse.json({
    token,
    user: {
      id,
      name,
      email,
      image,
      role,
    },
  }, { status: 200 });
}


